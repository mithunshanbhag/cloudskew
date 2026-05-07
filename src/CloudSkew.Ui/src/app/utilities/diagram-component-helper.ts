import { AlignmentOptions, DiagramComponent, DiagramTools, DistributeOptions, FileFormats, NodeModel, Rect } from '@syncfusion/ej2-angular-diagrams';
import { UXConstants } from '../constants/ux-constants';
import { ImageGenerationRequestDTO } from '../models/dto/imageGenerationRequestDTO';

export class DiagramComponentHelper {

    //#region locking/unlocking

    static isLocked(diagramComponent: DiagramComponent): boolean {
        for (const layer of diagramComponent.layers) {
            if (layer.lock === false) {
                return false;
            }
        }
        return true;
    }

    static lock(diagramComponent: DiagramComponent) {
        for (const layer of diagramComponent.layers) {
            layer.lock = true;
        }
    }

    static unlock(diagramComponent: DiagramComponent) {
        for (const layer of diagramComponent.layers) {
            layer.lock = false;
        }
    }

    //#endregion

    //#region zoom/center

    static isZoomInPossible(diagramComponent: DiagramComponent): boolean {
        const newProposedZoom = diagramComponent.scrollSettings.currentZoom * UXConstants.defaultZoomFactor;
        return (newProposedZoom <= diagramComponent.scrollSettings.maxZoom);
    }

    static isZoomOutPossible(diagramComponent: DiagramComponent): boolean {
        const newProposedZoom = diagramComponent.scrollSettings.currentZoom / UXConstants.defaultZoomFactor;
        return (diagramComponent.scrollSettings.minZoom <= newProposedZoom);
    }

    static isZoomResetPossible(diagramComponent: DiagramComponent): boolean {
        return (diagramComponent.scrollSettings.currentZoom !== 1);
    }

    static zoomIn(diagramComponent: DiagramComponent) {
        if (DiagramComponentHelper.isZoomInPossible(diagramComponent)) {
            diagramComponent.zoomTo({
                type: 'ZoomIn',
            });
        }
    }

    static zoomOut(diagramComponent: DiagramComponent) {
        if (DiagramComponentHelper.isZoomOutPossible(diagramComponent)) {
            diagramComponent.zoomTo({
                type: 'ZoomOut',
            });
        }
    }

    static zoomReset(diagramComponent: DiagramComponent) {
        while (DiagramComponentHelper.isZoomResetPossible(diagramComponent)) {
            if (diagramComponent.scrollSettings.currentZoom > 1) {
                DiagramComponentHelper.zoomOut(diagramComponent);
            } else {
                DiagramComponentHelper.zoomIn(diagramComponent);
            }
        }
    }

    static centerViewUsingDiagramOrigin(diagramComponent: DiagramComponent) {
        DiagramComponentHelper.zoomReset(diagramComponent);
        const diagramBounds = diagramComponent.getDiagramBounds();
        diagramComponent.bringToCenter(new Rect(
            diagramBounds.x,
            diagramBounds.y,
            diagramComponent.scrollSettings.viewPortWidth,
            diagramComponent.scrollSettings.viewPortHeight));
    }

    static centerViewUsingCustomOrigin(diagramComponent: DiagramComponent, x: number, y: number) {
        DiagramComponentHelper.zoomReset(diagramComponent);
        diagramComponent.bringToCenter(new Rect(
            x,
            y,
            diagramComponent.scrollSettings.viewPortWidth,
            diagramComponent.scrollSettings.viewPortHeight));
    }

    static resetView(diagramComponent: DiagramComponent) {
        diagramComponent.reset();
    }

    //#endregion

    //#region mode/tool

    static isSelectMode(diagramComponent: DiagramComponent): boolean {
        return diagramComponent.tool === DiagramTools.Default;
    }

    static isPanMode(diagramComponent: DiagramComponent): boolean {
        return diagramComponent.tool === DiagramTools.ZoomPan;
    }

    static setSelectMode(diagramComponent: DiagramComponent) {
        diagramComponent.tool = DiagramTools.Default;
    }

    static setPanMode(diagramComponent: DiagramComponent) {
        diagramComponent.clearSelection(); // ensure nothing is selected
        diagramComponent.tool = DiagramTools.ZoomPan;
    }

    //#endregion

    //#region print/export

    static generateImageGenerationRequest(diagramComponent: DiagramComponent, format: FileFormats | 'PDF'): ImageGenerationRequestDTO {
        // extract original view settings
        const arePageBreaksEnabled = DiagramComponentHelper.arePageBreaksEnabled(diagramComponent);
        const areRulersEnabled = DiagramComponentHelper.areRulersEnabled(diagramComponent);
        const zoomLevel = diagramComponent.scrollSettings.currentZoom;
        const horizontalOffset = diagramComponent.scrollSettings.horizontalOffset;
        const verticalOffset = diagramComponent.scrollSettings.verticalOffset;

        // We now have to "reset" the view for the following reasons:
        //
        // The presence of rulers & page breaks "interferes" with getDiagramContent(), getDiagramBounds().
        // So we'll disable them temporarily. Then we'll restore them to original settings after we call the methods.
        //
        // We need to ensure that the top-left corner of the diagram is visible because of the following:
        // - https://www.syncfusion.com/forums/172360/diagramcomponentgetdiagramcontent-wrongly-clips-content-if-i-scroll-above-or-to-left-of
        // - https://www.syncfusion.com/forums/171509/calling-diagramcomponentgetdiagramcontent-shifts-the-diagrams-layout-position
        DiagramComponentHelper.setPageBreaks(diagramComponent, false);
        DiagramComponentHelper.setRulers(diagramComponent, false);
        DiagramComponentHelper.centerViewUsingDiagramOrigin(diagramComponent);
        diagramComponent.refresh();

        // extract diagram content and bounds (needed to print/export)
        // HACK: The getDiagramBounds() methods is not working correctly for some reason. See details in this forum thread:
        // - https://www.syncfusion.com/forums/172607/getdiagrambounds-returns-different-values-when-browser-is-resized-maximized-restored-etc
        // The diagramBounds() method returns the dimensions of the diagram component/control, not the dimensions of the actual diagram itself.
        // Consequently, the actual diagram dimension can be extracted via the "private" getPageBounds() method instead.
        // Should this "private" method not be available in the future, here is what to do:
        // 1: If diagramBounds() dimensions exceed the viewport dimensions, we'll just use the diagramBounds() dimensions.
        // 2: If diagramBounds() dimensions do not exceed the viewport dimensions, we'll have to somehow get the actual diagram dimensions.
        const diagramContent = diagramComponent.getDiagramContent();
        const diagramBounds = diagramComponent.scroller.getPageBounds(); // HACK

        // restore original view settings
        DiagramComponentHelper.centerViewUsingCustomOrigin(diagramComponent, horizontalOffset * -1, verticalOffset * -1);
        DiagramComponentHelper.setRulers(diagramComponent, areRulersEnabled);
        DiagramComponentHelper.setPageBreaks(diagramComponent, arePageBreaksEnabled);
        diagramComponent.refresh(); // important, else diagram seems to 'freeze' and you have to zoom in/out to 'unfreeze'.

        const imageGenerationRequestDTO = new ImageGenerationRequestDTO(
            diagramContent,
            diagramBounds.height,
            diagramBounds.width,
            format,
        );
        return imageGenerationRequestDTO;
    }

    //#endregion

    //#region alignment & distribution

    // @todo fix this
    static align(diagramComponent: DiagramComponent, alignmentOptions: AlignmentOptions, symbolIds?: string[]) {
        const selectedNodes: NodeModel[] = [];
        if (symbolIds) {
            for (const symbolId of symbolIds) {
                const node = diagramComponent.nodes.find(node => node.id === symbolId);
                if (node) {
                    selectedNodes.push(node);
                }
            }
        } else {
            diagramComponent.selectedItems.nodes.forEach(node => selectedNodes.push(node));
        }

        diagramComponent.align(alignmentOptions, selectedNodes, 'Selector');
    }

    static distribute(diagramComponent: DiagramComponent, distributeOptions: DistributeOptions, symbolIds?: string[]) {
        const selectedNodes: NodeModel[] = [];
        if (symbolIds) {
            for (const symbolId of symbolIds) {
                const node = diagramComponent.nodes.find(node => node.id === symbolId);
                if (node) {
                    selectedNodes.push(node);
                }
            }
        } else {
            diagramComponent.selectedItems.nodes.forEach(node => selectedNodes.push(node));
        }

        diagramComponent.distribute(distributeOptions, selectedNodes);
    }

    //#endregion

    //#region page settings

    static arePageBreaksEnabled(diagramComponent: DiagramComponent): boolean {
        return diagramComponent.pageSettings.showPageBreaks;
    }

    static setPageBreaks(diagramComponent: DiagramComponent, enabled: boolean = true) {
        diagramComponent.pageSettings.showPageBreaks = enabled;
    }

    static areRulersEnabled(diagramComponent: DiagramComponent): boolean {
        return diagramComponent.rulerSettings.showRulers;
    }

    static setRulers(diagramComponent: DiagramComponent, enabled: boolean = true) {
        diagramComponent.rulerSettings.showRulers = enabled;
    }

    //#endregion
}

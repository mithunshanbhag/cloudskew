import { AnnotationConstraints, ConnectorConstraints, ConnectorModel, NodeConstraints, NodeModel } from '@syncfusion/ej2-angular-diagrams';
import { DiagramConstants } from '../constants/diagram-constants';
import { TypeGuards } from './type-guards';


export class SymbolHelper {

    static isSymbolLocked(symbol: NodeModel | ConnectorModel): boolean {
        return TypeGuards.symbolIsNodeModel(symbol)
            ? symbol.constraints === (NodeConstraints.Select | NodeConstraints.PointerEvents)
            : symbol.constraints === (ConnectorConstraints.Select | ConnectorConstraints.PointerEvents);
    }

    static lockSymbol(symbol: NodeModel | ConnectorModel) {
        symbol.constraints = TypeGuards.symbolIsNodeModel(symbol)
            ? NodeConstraints.Select | NodeConstraints.PointerEvents
            : ConnectorConstraints.Select | ConnectorConstraints.PointerEvents;
        for (const annotation of symbol.annotations) {
            annotation.constraints = AnnotationConstraints.None | AnnotationConstraints.ReadOnly;
        }
    }

    static unlockSymbol(symbol: NodeModel | ConnectorModel) {
        symbol.constraints = TypeGuards.symbolIsNodeModel(symbol)
            ? DiagramConstants.defaultNodeConstraints
            : DiagramConstants.defaultConnectorConstraints;
        for (const annotation of symbol.annotations) {
            annotation.constraints = TypeGuards.symbolIsNodeModel(symbol)
                ? DiagramConstants.defaultShapeAnnotationModels[0].constraints
                : DiagramConstants.defaultConnectorAnnotationModels[0].constraints;
        }
    }

    static isSymbolAspectRatioLocked(symbol: NodeModel | ConnectorModel): boolean {
        return TypeGuards.symbolIsNodeModel(symbol)
            ? symbol.constraints === (DiagramConstants.defaultNodeConstraints | NodeConstraints.AspectRatio)
            : false;
    }

    static lockSymbolAspectRatio(symbol: NodeModel | ConnectorModel) {
        if (TypeGuards.symbolIsNodeModel(symbol)) {
            symbol.constraints = DiagramConstants.defaultNodeConstraints | NodeConstraints.AspectRatio;
        }
    }

    static unlockSymbolAspectRatio(symbol: NodeModel | ConnectorModel) {
        if (TypeGuards.symbolIsNodeModel(symbol)) {
            symbol.constraints = DiagramConstants.defaultNodeConstraints;
        }
    }
}

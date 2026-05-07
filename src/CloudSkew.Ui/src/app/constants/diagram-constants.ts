import { AnnotationConstraints, ConnectorConstraints, DecoratorModel, MarginModel, NodeConstraints, PathAnnotationModel, PointModel, PointPortModel, PortConstraints, PortVisibility, ShapeAnnotationModel, StrokeStyleModel, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { ColorHexCodeConstants } from './color-hex-codes-constants';
import { UIConstants } from './ui-constants';

export class DiagramConstants {

    //#region connector defaults

    public static readonly defaultConnectorConstraints = ConnectorConstraints.Default
        | ConnectorConstraints.Tooltip
        | ConnectorConstraints.Bridging;

    // Note: Only affects elbow (orthogonal) connectors. Has no effect on line, curved connectors.
    public static readonly defaultConnectorCornerRadius = 10;

    public static readonly defaultConnectorStyle: StrokeStyleModel = {
        opacity: 0.5,
        strokeColor: ColorHexCodeConstants.black,
        strokeWidth: 1,
    };

    // Note: Only used by two-way connectors.
    // The 'target' decorators are always set by default for all connectors.
    public static readonly defaultConnectorSourceDecorator: DecoratorModel = {
        shape: 'Arrow'
    };

    public static readonly defaultConnectorAnnotationModels: PathAnnotationModel[] = [
        {
            constraints: AnnotationConstraints.Interaction,

            // this only seems to work for connectors and NOT for nodes
            dragLimit: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            } as MarginModel,

            style: {
                color: ColorHexCodeConstants.black,
                fontFamily: 'Roboto Mono',
                fontSize: 12,
                textWrapping: 'NoWrap',
                whiteSpace: 'PreserveAll',
            } as TextStyleModel,

            type: 'Path',
        },
    ];

    //#endregion connector defaults

    //#region node defaults

    public static readonly defaultNodeConstraints = NodeConstraints.Default | NodeConstraints.Tooltip;

    public static readonly defaultNodePorts: PointPortModel[] = [
        {
            constraints: PortConstraints.OutConnect | PortConstraints.InConnect | PortConstraints.Draw,
            offset: { x: 0, y: 0.5 },
            shape: 'X',
            visibility: PortVisibility.Connect | PortVisibility.Hover,
        },
        {
            constraints: PortConstraints.OutConnect | PortConstraints.InConnect | PortConstraints.Draw,
            offset: { x: 0.5, y: 0 },
            shape: 'X',
            visibility: PortVisibility.Connect | PortVisibility.Hover,
        },
        {
            constraints: PortConstraints.OutConnect | PortConstraints.InConnect | PortConstraints.Draw,
            offset: { x: 1, y: 0.5 },
            shape: 'X',
            visibility: PortVisibility.Connect | PortVisibility.Hover,
        },
        {
            constraints: PortConstraints.OutConnect | PortConstraints.InConnect | PortConstraints.Draw,
            offset: { x: 0.5, y: 1 },
            shape: 'X',
            visibility: PortVisibility.Connect | PortVisibility.Hover,
        },
    ];

    public static readonly defaultShapeAnnotationModels: ShapeAnnotationModel[] = [
        {
            constraints: AnnotationConstraints.Interaction,

            width: UIConstants.diagramControlSymbolDefaultWidth,

            // this only seems to work for connectors and NOT for nodes
            dragLimit: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            } as MarginModel,

            offset: {
                x: 0.5,
                y: 1,
            } as PointModel,

            margin: {
                top: 15,
            } as MarginModel,

            style: {
                color: ColorHexCodeConstants.black,
                fontFamily: 'Roboto Mono',
                fontSize: 14,
                whiteSpace: 'PreserveAll',
                textWrapping: 'NoWrap',
            } as TextStyleModel,

            type: 'Shape',
        },
    ];

    //#endregion node defaults
}

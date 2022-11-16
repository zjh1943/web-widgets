/**
 * This file was generated from HTMLElement.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, DynamicValue, ListValue, ListActionValue, ListExpressionValue, ListWidgetValue } from "mendix";

export type TagNameEnum = "div" | "span" | "p" | "ul" | "ol" | "li" | "a" | "img" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "__customTag__";

export type TagContentModeEnum = "container" | "innerHTML";

export type AttributeValueTypeEnum = "expression" | "template";

export interface AttributesType {
    attributeName: string;
    attributeValueType: AttributeValueTypeEnum;
    attributeValueTemplate?: DynamicValue<string>;
    attributeValueExpression?: DynamicValue<string>;
    attributeValueTemplateRepeat?: ListExpressionValue<string>;
    attributeValueExpressionRepeat?: ListExpressionValue<string>;
}

export type EventNameEnum = "onClick" | "onChange" | "onFocus" | "onLeave" | "onSubmit" | "onKeyDown" | "onKeyUp" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture";

export interface EventsType {
    eventName: EventNameEnum;
    eventAction?: ActionValue;
    eventActionRepeat?: ListActionValue;
    eventStopPropagation: boolean;
    eventPreventDefault: boolean;
}

export interface AttributesPreviewType {
    attributeName: string;
    attributeValueType: AttributeValueTypeEnum;
    attributeValueTemplate: string;
    attributeValueExpression: string;
    attributeValueTemplateRepeat: string;
    attributeValueExpressionRepeat: string;
}

export interface EventsPreviewType {
    eventName: EventNameEnum;
    eventAction: {} | null;
    eventActionRepeat: {} | null;
    eventStopPropagation: boolean;
    eventPreventDefault: boolean;
}

export interface HTMLElementContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    tagName: TagNameEnum;
    tagNameCustom: string;
    tagUseRepeat: boolean;
    tagContentRepeatDataSource: ListValue;
    tagContentMode: TagContentModeEnum;
    tagContentHTML?: DynamicValue<string>;
    tagContentContainer?: ReactNode;
    tagContentRepeatHTML?: ListExpressionValue<string>;
    tagContentRepeatContainer?: ListWidgetValue;
    attributes: AttributesType[];
    events: EventsType[];
}

export interface HTMLElementPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    tagName: TagNameEnum;
    tagNameCustom: string;
    tagUseRepeat: boolean;
    tagContentRepeatDataSource: {} | { type: string } | null;
    tagContentMode: TagContentModeEnum;
    tagContentHTML: string;
    tagContentContainer: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    tagContentRepeatHTML: string;
    tagContentRepeatContainer: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    attributes: AttributesPreviewType[];
    events: EventsPreviewType[];
}

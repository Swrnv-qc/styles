/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX,
} from "./DefaultUtilityStyles";

export const X_LARGE_MARGIN = DEFAULT_MARGIN;
export const X_LARGE_PADDING = DEFAULT_PADDING;
export const X_LARGE_SPACING = DEFAULT_SPACING;

export const xLargeUtilityStyles = {
  /**************************************************
   * Alignment
   *************************************************/
  xlAlignItemsStart: { display: "flex", alignItems: "flex-start" },
  xlAlignItemsEnd: { display: "flex", alignItems: "flex-end" },
  xlAlignItemsCenter: { display: "flex", alignItems: "center" },
  xlAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
  xlAlignItemsStretch: { display: "flex", alignItems: "stretch" },

  xlAlignContentStart: { display: "flex", alignContent: "flex-start" },
  xlAlignContentEnd: { display: "flex", alignContent: "flex-end" },
  xlAlignContentCenter: { display: "flex", alignContent: "center" },
  xlAlignContentBetween: { display: "flex", alignContent: "space-between" },
  xlAlignContentAround: { display: "flex", alignContent: "space-around" },
  xlAlignContentStretch: { display: "flex", alignContent: "stretch" },

  xlAlignSelfAuto: { display: "flex", alignSelf: "auto" },
  xlAlignSelfStart: { display: "flex", alignSelf: "flex-start" },
  xlAlignSelfEnd: { display: "flex", alignSelf: "flex-end" },
  xlAlignSelfCenter: { display: "flex", alignSelf: "center" },
  xlAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
  xlAlignSelfStretch: { display: "flex", alignSelf: "stretch" },

  xlJustifyContentCenter: { display: "flex", justifyContent: "center" },
  xlJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" },
  xlJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
  xlJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
  xlJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" },
  xlJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" },

  /**************************************************
   * Background
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Border
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Color
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Cursor
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Display
   *************************************************/
  xlDisplayInline: { display: "inline" },
  xlDisplayInlineBlock: { display: "inline-block" },
  xlDisplayBlock: { display: "block" },
  xlDisplayGrid: { display: "grid" },
  xlDisplayTable: { display: "table" },
  xlDisplayTableRow: { display: "table-row" },
  xlDisplayTableCell: { display: "table-cell" },
  xlDisplayFlex: { display: "flex" },
  xlDisplayInlineFlex: { display: "inline-flex" },
  xlDisplayNone: { display: "none" },

  /**************************************************
   * Flex
   *************************************************/
  xlFlexDirectionRow: { flexDirection: "row" },
  xlFlexDirectionColumn: { flexDirection: "column" },
  xlFlexDirectionRowReverse: { flexDirection: "row-reverse" },
  xlFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
  xlFlexFill: { flex: "1 1 auto" },
  xlFlexGrow0: { flexGrow: "0" },
  xlFlexGrow1: { flexGrow: "1" },
  xlFlexShrink0: { flexShrink: "0" },
  xlFlexShrink1: { flexShrink: "1" },
  xlFlexWrapWrap: { flexWrap: "wrap" },
  xlFlexWrapNoWrap: { flexWrap: "nowrap" },
  xlFlexWrapWrapReverse: { flexWrap: "wrap-reverse" },

  /**************************************************
   * Float
   *************************************************/
  xlFloatStart: { float: "left" },
  xlFloatEnd: { float: "right" },
  xlFloatNone: { float: "none" },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  xlObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain",
  },

  xlObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover",
  },

  xlObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill",
  },

  xlObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down",
  },

  xlObjectFitNone: {
    // -o-object-fit: none !important;
    objectFit: "none",
  },

  /**************************************************
   * Opacity
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Overflow
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Position
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Shadows
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Sizing
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Spacing
   *************************************************/
  /*-------------------------------------------------
   * Padding
   *-----------------------------------------------*/
  xlP0: { padding: 0 },
  xlP1: { padding: X_LARGE_PADDING + PX },
  xlP2: { padding: X_LARGE_PADDING * 2 + PX },
  xlP3: { padding: X_LARGE_PADDING * 3 + PX },
  xlP4: { padding: X_LARGE_PADDING * 4 + PX },
  xlP5: { padding: X_LARGE_PADDING * 5 + PX },

  xlPt0: { paddingTop: 0 },
  xlPt1: { paddingTop: X_LARGE_PADDING + PX },
  xlPt2: { paddingTop: X_LARGE_PADDING * 2 + PX },
  xlPt3: { paddingTop: X_LARGE_PADDING * 3 + PX },
  xlPt4: { paddingTop: X_LARGE_PADDING * 4 + PX },
  xlPt5: { paddingTop: X_LARGE_PADDING * 5 + PX },

  xlPr0: { paddingRight: 0 },
  xlPr1: { paddingRight: X_LARGE_PADDING + PX },
  xlPr2: { paddingRight: X_LARGE_PADDING * 2 + PX },
  xlPr3: { paddingRight: X_LARGE_PADDING * 3 + PX },
  xlPr4: { paddingRight: X_LARGE_PADDING * 4 + PX },
  xlPr5: { paddingRight: X_LARGE_PADDING * 5 + PX },

  xlPb0: { paddingBottom: 0 },
  xlPb1: { paddingBottom: X_LARGE_PADDING + PX },
  xlPb2: { paddingBottom: X_LARGE_PADDING * 2 + PX },
  xlPb3: { paddingBottom: X_LARGE_PADDING * 3 + PX },
  xlPb4: { paddingBottom: X_LARGE_PADDING * 4 + PX },
  xlPb5: { paddingBottom: X_LARGE_PADDING * 5 + PX },

  xlPl0: { paddingLeft: 0 },
  xlPl1: { paddingLeft: X_LARGE_PADDING + PX },
  xlPl2: { paddingLeft: X_LARGE_PADDING * 2 + PX },
  xlPl3: { paddingLeft: X_LARGE_PADDING * 3 + PX },
  xlPl4: { paddingLeft: X_LARGE_PADDING * 4 + PX },
  xlPl5: { paddingLeft: X_LARGE_PADDING * 5 + PX },

  xlPx0: { paddingLeft: 0, paddingRight: 0 },
  xlPx1: {
    paddingLeft: X_LARGE_PADDING * 1 + PX,
    paddingRight: X_LARGE_PADDING * 1 + PX,
  },
  xlPx2: {
    paddingLeft: X_LARGE_PADDING * 2 + PX,
    paddingRight: X_LARGE_PADDING * 2 + PX,
  },
  xlPx3: {
    paddingLeft: X_LARGE_PADDING * 3 + PX,
    paddingRight: X_LARGE_PADDING * 3 + PX,
  },
  xlPx4: {
    paddingLeft: X_LARGE_PADDING * 4 + PX,
    paddingRight: X_LARGE_PADDING * 4 + PX,
  },
  xlPx5: {
    paddingLeft: X_LARGE_PADDING * 5 + PX,
    paddingRight: X_LARGE_PADDING * 5 + PX,
  },

  xlPy0: { paddingTop: 0, paddingBottom: 0 },
  xlPy1: {
    paddingTop: X_LARGE_PADDING * 1 + PX,
    paddingBottom: X_LARGE_PADDING * 1 + PX,
  },
  xlPy2: {
    paddingTop: X_LARGE_PADDING * 2 + PX,
    paddingBottom: X_LARGE_PADDING * 2 + PX,
  },
  xlPy3: {
    paddingTop: X_LARGE_PADDING * 3 + PX,
    paddingBottom: X_LARGE_PADDING * 3 + PX,
  },
  xlPy4: {
    paddingTop: X_LARGE_PADDING * 4 + PX,
    paddingBottom: X_LARGE_PADDING * 4 + PX,
  },
  xlPy5: {
    paddingTop: X_LARGE_PADDING * 5 + PX,
    paddingBottom: X_LARGE_PADDING * 5 + PX,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  xlM0: { margin: 0 + IMPORTANT },
  xlM1: { margin: X_LARGE_MARGIN + PX + IMPORTANT },
  xlM2: { margin: X_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xlM3: { margin: X_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xlM4: { margin: X_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xlM5: { margin: X_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xlMAuto: { margin: "auto" + IMPORTANT },

  xlMt0: { marginTop: 0 + IMPORTANT },
  xlMt1: { marginTop: X_LARGE_MARGIN + PX + IMPORTANT },
  xlMt2: { marginTop: X_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xlMt3: { marginTop: X_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xlMt4: { marginTop: X_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xlMt5: { marginTop: X_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xlMtAuto: { marginTop: "auto" + IMPORTANT },

  xlMr0: { marginRight: 0 + IMPORTANT },
  xlMr1: { marginRight: X_LARGE_MARGIN + PX + IMPORTANT },
  xlMr2: { marginRight: X_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xlMr3: { marginRight: X_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xlMr4: { marginRight: X_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xlMr5: { marginRight: X_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xlMrAuto: { marginRight: "auto" + IMPORTANT },

  xlMb0: { marginBottom: 0 + IMPORTANT },
  xlMb1: { marginBottom: X_LARGE_MARGIN + PX + IMPORTANT },
  xlMb2: { marginBottom: X_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xlMb3: { marginBottom: X_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xlMb4: { marginBottom: X_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xlMb5: { marginBottom: X_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xlMbAuto: { marginBottom: "auto" + IMPORTANT },

  xlMl0: { marginLeft: 0 + IMPORTANT },
  xlMl1: { marginLeft: X_LARGE_MARGIN + PX + IMPORTANT },
  xlMl2: { marginLeft: X_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xlMl3: { marginLeft: X_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xlMl4: { marginLeft: X_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xlMl5: { marginLeft: X_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xlMlAuto: { marginLeft: "auto" + IMPORTANT },

  xlMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
  xlMx1: {
    marginLeft: X_LARGE_MARGIN * 1 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 1 + PX + IMPORTANT,
  },
  xlMx2: {
    marginLeft: X_LARGE_MARGIN * 2 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 2 + PX + IMPORTANT,
  },
  xlMx3: {
    marginLeft: X_LARGE_MARGIN * 3 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 3 + PX + IMPORTANT,
  },
  xlMx4: {
    marginLeft: X_LARGE_MARGIN * 4 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 4 + PX + IMPORTANT,
  },
  xlMx5: {
    marginLeft: X_LARGE_MARGIN * 5 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 5 + PX + IMPORTANT,
  },
  xlMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  xlMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
  xlMy1: {
    marginTop: X_LARGE_MARGIN * 1 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 1 + PX + IMPORTANT,
  },
  xlMy2: {
    marginTop: X_LARGE_MARGIN * 2 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 2 + PX + IMPORTANT,
  },
  xlMy3: {
    marginTop: X_LARGE_MARGIN * 3 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 3 + PX + IMPORTANT,
  },
  xlMy4: {
    marginTop: X_LARGE_MARGIN * 4 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 4 + PX + IMPORTANT,
  },
  xlMy5: {
    marginTop: X_LARGE_MARGIN * 5 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 5 + PX + IMPORTANT,
  },
  xlMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  xlMN1: { margin: X_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xlMN2: { margin: X_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xlMN3: { margin: X_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xlMN4: { margin: X_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xlMN5: { margin: X_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xlMtN1: { marginTop: X_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xlMtN2: { marginTop: X_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xlMtN3: { marginTop: X_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xlMtN4: { marginTop: X_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xlMtN5: { marginTop: X_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xlMrN1: { marginRight: X_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xlMrN2: { marginRight: X_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xlMrN3: { marginRight: X_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xlMrN4: { marginRight: X_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xlMrN5: { marginRight: X_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xlMbN1: { marginBottom: X_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xlMbN2: { marginBottom: X_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xlMbN3: { marginBottom: X_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xlMbN4: { marginBottom: X_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xlMbN5: { marginBottom: X_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xlMlN1: { marginLeft: X_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xlMlN2: { marginLeft: X_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xlMlN3: { marginLeft: X_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xlMlN4: { marginLeft: X_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xlMlN5: { marginLeft: X_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xlMxN1: {
    marginLeft: X_LARGE_MARGIN * -1 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -1 + PX + IMPORTANT,
  },
  xlMxN2: {
    marginLeft: X_LARGE_MARGIN * -2 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -2 + PX + IMPORTANT,
  },
  xlMxN3: {
    marginLeft: X_LARGE_MARGIN * -3 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -3 + PX + IMPORTANT,
  },
  xlMxN4: {
    marginLeft: X_LARGE_MARGIN * -4 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -4 + PX + IMPORTANT,
  },
  xlMxN5: {
    marginLeft: X_LARGE_MARGIN * -5 + PX + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -5 + PX + IMPORTANT,
  },

  xlMyN1: {
    marginTop: X_LARGE_MARGIN * -1 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -1 + PX + IMPORTANT,
  },
  xlMyN2: {
    marginTop: X_LARGE_MARGIN * -2 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -2 + PX + IMPORTANT,
  },
  xlMyN3: {
    marginTop: X_LARGE_MARGIN * -3 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -3 + PX + IMPORTANT,
  },
  xlMyN4: {
    marginTop: X_LARGE_MARGIN * -4 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -4 + PX + IMPORTANT,
  },
  xlMyN5: {
    marginTop: X_LARGE_MARGIN * -5 + PX + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -5 + PX + IMPORTANT,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  xlGap0: { gap: "0" },
  xlGap1: { gap: X_LARGE_SPACING * 1 },
  xlGap2: { gap: X_LARGE_SPACING * 2 },
  xlGap3: { gap: X_LARGE_SPACING * 3 },
  xlGap4: { gap: X_LARGE_SPACING * 4 },
  xlGap5: { gap: X_LARGE_SPACING * 5 },

  xlRowGap0: { rowGap: "0" },
  xlRowGap1: { rowGap: X_LARGE_SPACING * 1 },
  xlRowGap2: { rowGap: X_LARGE_SPACING * 2 },
  xlRowGap3: { rowGap: X_LARGE_SPACING * 3 },
  xlRowGap4: { rowGap: X_LARGE_SPACING * 4 },
  xlRowGap5: { rowGap: X_LARGE_SPACING * 5 },

  xlColGap0: { columnGap: "0" },
  xlColGap1: { columnGap: X_LARGE_SPACING * 1 },
  xlColGap2: { columnGap: X_LARGE_SPACING * 2 },
  xlColGap3: { columnGap: X_LARGE_SPACING * 3 },
  xlColGap4: { columnGap: X_LARGE_SPACING * 4 },
  xlColGap5: { columnGap: X_LARGE_SPACING * 5 },

  /**************************************************
   * Text
   *************************************************/
  xlTextStart: { textAlign: "left" + IMPORTANT },
  xlTextEnd: { textAlign: "right" + IMPORTANT },
  xlTextCenter: { textAlign: "center" + IMPORTANT },
  xlTextJustify: { textAlign: "justify" + IMPORTANT },

  //NO OTHER SCREEN SIZE SPECIFIC STYLE NEEDED

  /**************************************************
   * Vertical Align
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Visibility
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * zindex
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE
};

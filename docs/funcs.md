# Functions

## Color

### .brightness()

No Args

### .color( `r`, `g`, `b` )

https://www.youtube.com/watch?v=FpOEtm9aX0M

* r :: float
* g :: float
* b :: float

### .colorama()

No Args

### .contrast()

No Args

### .hue()

No Args

### .invert()

No Args

### .luma( `threshold`, `tolerance` )

* threshold :: float
* tolerance :: float

### .posterize( `bins`, `gamma` )

* bins :: float
* gamma :: float

### .saturate()

No Args

### .shift( `r`, `g`, `b`, `a` )

* r :: float
* g :: float
* b :: float
* a :: float

### .thresh( `threshold`, `tolerance` )

* threshold :: float
* tolerance :: float

-----------


## Combine

### .add( `color`, `amount` )

* color :: vec4
* amount :: float

### .blend( `color`, `amount` )

* color :: vec4
* amount :: float

### .diff()

No Args

### .layer()

No Args

### .mask()

No Args

### .mult( `color`, `amount` )

* color :: vec4
* amount :: float

-----------


## CombineCoord

### .modulate( `color`, `amount` )

* color :: vec4
* amount :: float

### .modulateHue( `color`, `amount` )

changes coordinates based on hue of second input. Based on: https://www.shadertoy.com/view/XtcSWM

* color :: vec4
* amount :: float

### .modulateKaleid( `color`, `nSides` )

* color :: vec4
* nSides :: float

### .modulatePixelate( `color`, `multiple`, `offset` )

* color :: vec4
* multiple :: float
* offset :: float

### .modulateRepeat( `color`, `repeatX`, `repeatY`, `offsetX`, `offsetY` )

* color :: vec4
* repeatX :: float
* repeatY :: float
* offsetX :: float
* offsetY :: float

### .modulateRepeatX( `color`, `reps`, `offset` )

* color :: vec4
* reps :: float
* offset :: float

### .modulateRepeatY( `color`, `reps`, `offset` )

* color :: vec4
* reps :: float
* offset :: float

### .modulateRotate( `color`, `multiple`, `offset` )

* color :: vec4
* multiple :: float
* offset :: float

### .modulateScale( `color`, `multiple`, `offset` )

* color :: vec4
* multiple :: float
* offset :: float

### .modulateScrollX( `color`, `scrollX`, `speed` )

* color :: vec4
* scrollX :: float
* speed :: float

### .modulateScrollY( `color`, `scrollY`, `speed` )

* color :: vec4
* scrollY :: float
* speed :: float

-----------


## Coord

### .kaleid()

No Args

### .pixelate( `pixelX`, `pixelY` )

* pixelX :: float
* pixelY :: float

### .repeat( `repeatX`, `repeatY`, `offsetX`, `offsetY` )

* repeatX :: float
* repeatY :: float
* offsetX :: float
* offsetY :: float

### .repeatX( `reps`, `offset` )

* reps :: float
* offset :: float

### .repeatY( `reps`, `offset` )

* reps :: float
* offset :: float

### .rotate( `angle`, `speed` )

* angle :: float
* speed :: float

### .scale( `amount`, `xMult`, `yMult` )

* amount :: float
* xMult :: float
* yMult :: float

### .scrollX( `scrollX`, `speed` )

* scrollX :: float
* speed :: float

### .scrollY( `scrollY`, `speed` )

* scrollY :: float
* speed :: float

-----------


## Src

### gradient()

No Args

### noise( `scale`, `offset` )

* scale :: float
* offset :: float

### osc( `frequency`, `sync`, `offset` )

* frequency :: float
* sync :: float
* offset :: float

### shape( `sides`, `radius`, `smoothing` )

* sides :: float
* radius :: float
* smoothing :: float

### solid( `r`, `g`, `b`, `a` )

* r :: float
* g :: float
* b :: float
* a :: float

### src()

No Args

-----------


## Util

### ._hsvToRgb()

No Args

### ._noise()

No Args

### ._rgbToHsv()

No Args

### .luminance()

No Args

-----------



# Argument Types

* float
* texture
* vec4


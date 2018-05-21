# Animation

The ability to pass functions as parameter arguments can be used to change between discrete values over time.

This in combination with some JavaScript features means that the following function can be defined in the patch and then used to do this in a generic way.

```
seq = (arr = [], speed = 1) => ({time}) => (
  arr[ Math.floor( time * speed % (arr.length) ) ]
)
```

## Example

```
seq = (arr = [], speed = 1) => ({time}) => (
  arr[ Math.floor( time * speed % (arr.length) ) ]
)

osc(
  seq( [80, 100, 200, 50], 1 )
)
.out(o0)
```

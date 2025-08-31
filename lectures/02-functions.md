# Functions

## Environment Diagrams

### Frames

Frame holds name-value bindings
- It looks like a box
- No repeated names allowed

Global frame is the frame with built-in names

### Procedure for calling user-defined functions

1. Add a local frame, forming a new environment
2. Bind the function's formal parameters to its arguments in that frame
3. Execute the body of the function in that new environment

### Environment

Environment is a sequence of frames
- It always ends with the global frame
- The global frame is always the last place you look

Organized in this way is for
- Local context before global context
- Calling or returning changes the local context
- Assignment within a function's local frame does not affect other frames

## Multiple Assignment

Multiple assignment is allowed

```python
a = 1
b = 2
b, a = a + b, b
```

(() => {
  w._$delayHydration.then((e: Event) => {
    if (!(e instanceof PointerEvent) && !(e instanceof MouseEvent) && !(e instanceof TouchEvent))
      return

    if (e instanceof MouseEvent && e.type !== 'click')
      return
    setTimeout(() =>
      w.requestIdleCallback(
        () => setTimeout(() => e.target?.click(), 500),
      ),
    50)
  })
})()

function HelpPopup($dom, store) {
  this.$view = $dom.find('.octotree_popup')
  this.store = store
}

HelpPopup.prototype.show = function() {
  var $view = this.$view
    , store = this.store
    , popupShown = store.get(STORE.POPUP)

  if (popupShown) return

  $view.css('display', 'block').appendTo($('body'))

  $(document).one(EVENT.TOGGLE, hide)
  setTimeout(function() {
    store.set(STORE.POPUP, true)
    $view.addClass('show').click(hide)
    setTimeout(hide, 6000)
  }, 500)

  function hide() {
    if ($view.hasClass('show')) {
      $view.removeClass('show').one('transitionend', function() { $view.remove() })
    }
  }
}
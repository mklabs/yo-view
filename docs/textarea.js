const View = require('../lib');

export default class Textarea extends View {
  get namespace () {
    return 'yoview:txtarea';
  }

  get template () {
    return this.yo`
    <form action="#">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" id="sample6">
          <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
        </div>
      </div>
    </form>
    `;
  }

  static create (opts) {
    return new Textarea(opts);
  }
}

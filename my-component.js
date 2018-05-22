import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';

class MyComponent extends PolymerElement {
  static get is() {
    return 'my-component';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <vaadin-grid aria-label="Basic Binding Example" items="[[items]]">

        <vaadin-grid-column width="60px" flex-grow="0">
          <template class="header">#</template>
          <template>[[index]]</template>
          <template class="footer">#</template>
        </vaadin-grid-column>

        <vaadin-grid-column>
          <template class="header">First Name</template>
          <template>[[item.firstName]]</template>
          <template class="footer">First Name</template>
        </vaadin-grid-column>

        <vaadin-grid-column>
          <template class="header">Last Name</template>
          <template>[[item.lastName]]</template>
          <template class="footer">Last Name</template>
        </vaadin-grid-column>

        <vaadin-grid-column width="150px">
          <template class="header">Address</template>
          <template>
            <p style="white-space: normal">[[item.address.street]], [[item.address.city]]</p>
          </template>
          <template class="footer">Address</template>
        </vaadin-grid-column>

      </vaadin-grid>
    `;
  }

  static get properties() {
    return {
      items: Object
    }
  }

  ready() {
    super.ready();
    fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
      .then(res => res.json())
      .then(json => this.items = json.result);
  }

}

customElements.define(MyComponent.is, MyComponent);

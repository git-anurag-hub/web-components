import { Component, Host, h, Prop, State } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'wc-elixir-utils-new-service',
  styleUrl: 'wc-elixir-utils-new-service.css',
  scoped: true,
})
export class WcElixirUtilsNewService {
  @Prop() apiUrl: string;
  @Prop() schema: string;
  @Prop() authToken: string;
  @State() fields: any;
  @State() data: string = 'loading';

  componentWillLoad = async () => {
    try {
      const res = await axios.get(this.apiUrl);
      this.fields = res.data.components.schemas[this.schema];
      this.data = 'loaded';
    } catch (e) {
      this.data = 'error';
    }
  };

  render() {
    console.log(this.data);
    if (this.data == 'loading') {
      return (
        <div class="text-center">
          <div class="text-gray-700">Loading...</div>
        </div>
      );
    }
    if (this.data == 'error' || !this.fields) {
      return (
        <div class="flex text-red-400 justify-center font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sorry, the open api endpoint doesn't exist.
        </div>
      );
    }
    return (
      <Host>
        <div class="text-center">
          <div class="text-lg font-semibold">Create new Service</div>
        </div>
        <br></br>
      </Host>
    );
  }
}

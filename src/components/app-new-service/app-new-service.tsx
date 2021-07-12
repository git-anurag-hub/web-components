import { Component, Host, h, State } from '@stencil/core';
import { componentProps } from '../../types';
@Component({
  tag: 'app-new-service',
  styleUrl: 'app-new-service.css',
  scoped: true,
})
export class AppNewService {
  @State() componentProps: componentProps[] = [
    {
      name: 'authToken',
      type: 'string',
    },
  ];

  renderProps = () => {
    return this.componentProps.map(prop => {
      return (
        <div class="w-full border-gray-200 border-b-2 grid grid-cols-3 gap-10 my-2.5">
          <div>{prop.name}</div>
          <div class="font-mono ">
            <div class="bg-gray-100 w-max">{prop.type}</div>
          </div>
          <div>{prop.default}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <Host>
        <div class="text-3xl font-semibold mb-5">Add new service</div>
        <div class=" my-10">
          <div class="border-gray-100 rounded-lg p-3 border-2 my-10">
            <div class="text-sm font-semibold w-full border-b-2 border-gray-100 pb-2">Component Demo</div>
            <div class="mt-4">
              In Development
              {/* <wc-elixir-utils-service-list itemsPerPage={5} authToken="component-demo"></wc-elixir-utils-service-list> */}
            </div>
          </div>
          <div class="text-3xl my-5">Usage</div>
          <div class="text-2xl mt-5">Principle</div>
          <div class="my-3 leading-7">This component will allow the users to add the services to their dashboard.</div>
          <div class="text-2xl mt-5">Implementation</div>
          <div class="my-3 leading-7">
            This component can we used by:
            <button class="bg-gray-100 py-1 font-mono px-2 ml-2 cursor-text focus:outline-none">&lt;wc-elixir-new-service&gt;</button>
          </div>
          <div>
            <div class="my-10">
              <div class="text-2xl">Props</div>
              <div class="my-3 leading-7">
                <div class="lg:mr-32">
                  <div class="w-full border-gray-200 border-b-2 text-sm grid grid-cols-3 gap-10">
                    <div>Prop Name</div>
                    <div>Type</div>
                    <div>Default</div>
                  </div>
                  {this.renderProps()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

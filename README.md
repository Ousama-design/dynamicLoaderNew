Task details
-	Create a component loader which can load a dynamic component, selector name of this component should be iris-component-loader
-	This component should accept an Input of
o	Component that should be loaded
o	Any other data which is needed by the loaded component
-	This component also can get the Output events from the loaded component and provide them to the parent component


Example
-	Create a parent component which should load a component which display a drop down
o	Name of this component is address-form (componentA in my case)
-	The options of this drop down should be provided by address-form component
-	the address-form should use the component loader to load the component field dropdown
-	when the user changes the drop down option, an Output event emitter should be triggered with selected value
-	the component loader should get this output and output it to the address-form
-	in address-form component display the selected value in the screen

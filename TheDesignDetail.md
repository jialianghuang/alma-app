Thanks for reading the document! This is a demo of the Alma app. 

It has basic state management, Auth and using Jsonforms to creating form.

WThe Application Form take the advantage of Next.js 

Server Side Rendering and nice styled with tailwind CSS,

the components are easy to build with the help of styled-components.

The dashboard is tricky as we have to add a button to change the status.

At first I was trying to add a custom renderer and rewrite the table that 

the Jsonforms render. But then I realized that it was too much work and 

there is no need to rewrite the table renderer. Just add a custom cell and 

make some change to the schema(add a new dummy property and use tester to 

render it as a button). It works and I think it's fine if only one field

is changeable. Otherwise it's better to custom the table it rendered.
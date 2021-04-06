/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[];
 * React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */

 type BoxProps = { children: any };

 const Box = ({ children }: BoxProps) => {
   return (
     <section style={{ padding: "1em", border: "5px solid purple" }}>
       {children}
     </section>
   );
 };
 
 export default function Application() {
   return (
     <Box>
       Just a string.
       <p>Some HTML that is not nested.</p>
       <Box>
         <h2>Another React component with one child.</h2>
       </Box>
       <Box>
         <h2>A nested React component with two children.</h2>
         <p>The second child.</p>
       </Box>
     </Box>
   );
 }
 
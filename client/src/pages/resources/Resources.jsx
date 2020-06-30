import React, { useEffect } from "react";
import "./Resources.css";
import Prism from "prismjs";
import ScrollTop from "../../components/scrolltoparrow/ScrollTopArrow";
import MyThemeStyle from "../../MyTheme.module.css";

const Resources = () => {
  useEffect(() => {
    console.log("Hello");
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);

  return (
    <div className={`container-page ${MyThemeStyle.textColor}`}>
      <ScrollTop />
      <h1 className={MyThemeStyle.textColor}>Resources page</h1>
      <div className="sidenav">
        <a href="#section-html">HTML</a>
        <a href="#section-css">CSS</a>
        <a href="#section-javascript">JavaScript</a>
        <a href="#section-react">React</a>
        <a href="#section-node">Node</a>
        <a href="#section-express">Express</a>
        <a href="#section-mysql">MySQL</a>
        <a href="#section-github">Git</a>
      </div>
      {/* Page content  */}
      <div className="main">
        <div id="section-html" className="section-html section">
          <h2 className={MyThemeStyle.textColor}>HTML5</h2>
          <p className={MyThemeStyle.textColor}>
            Hypertext Markup Language, it defines the meaning and structure of
            web content. It was designed to replace HTML4, XHTML and the HTML
            DOM level 2. Key new features are:
          </p>
          <ul className={MyThemeStyle.textColor}>
            <li>
              Improved support for embedding graphics (canvas), audio (audio),
              and video content (video).
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
                Mozilla Canvas
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio">
                Mozilla Audio
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video">
                Mozilla Video
              </a>
            </li>
            <li>
              Extensions to the JavaScript API such as geolocation and
              drag-and-drop as well for storage and caching.
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API">
                Mozilla Geolocation
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API">
                Mozilla Drag and Drop
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API">
                Mozilla Web Storage
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache">
                Mozilla Application Cache
              </a>
            </li>
            <li>
              Introduction of "Web Workers" A web worker is a script that runs
              in the background (i.e., in another thread) without the page
              needing to wait for it to complete. The user can continue to
              interact with the page while the web worker runs in the
              background. Workers utilize thread-like message passing to achieve
              parallelism.
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">
                Web Workers Mozilla.org
              </a>
            </li>
            <li>
              Provides two storage objects, Local storage, and Session storage.
              These objects act as a temporary database for websites which
              reduces the cookie size and helps to speed up response time.
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
                Local Storage Mozilla.org
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage">
                Session Storage Mozilla.org
              </a>
            </li>
            <li>
              Cleaner and more improved semantics:
              <ol>
                <li>
                  aricle - Is intended to be independently distributable or
                  reusable.
                </li>
                <li>
                  aside - Is a sidebar to your main content. It is not included
                  in the flow of the main content.
                </li>
                <li>details - Toggles detailed information.</li>
                <li>figcaption - Is to caption your image.</li>
                <li>figure - Is for wrapping your image content around it.</li>
                <li>
                  footer - Found at the bottom of the website. Usually contains
                  legal, author details and contact information.
                </li>
                <li>
                  header - Found at the top of a website and can contain
                  navigational elements and logos.
                </li>
                <li>
                  main - Represents the main content of the body excluding
                  header, nav, aside, and footer.
                </li>
                <li>nav - It provides navigational links.</li>
                <li>section - Is a grouping of content.</li>
                <li>
                  summary - Specifies a summary, caption, or legend for a
                  details element disclosure box.
                </li>
                <li>time - Allows a human-readable-version of a date.</li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
                  Elements Mozilla.org
                </a>
              </ol>
            </li>
          </ul>

          <figure className={MyThemeStyle.textColor}>
            <figcaption>Example</figcaption>
            <pre>
              <code className={MyThemeStyle.textColor}>
                {/* Your code here! */}
                &lt;header&gt;&lt;/header&gt; <br></br>
                &lt;section&gt; <br></br>
                &lt;article&gt; <br></br>
                &lt;figure&gt; <br></br>
                &lt;img&gt;<br></br>
                &lt;figurecaption&gt;&lt;/figurecaption&gt; &lt;/figure&gt;{" "}
                <br></br>
                &lt;/article&gt; <br></br>
                &lt;/section&gt; <br></br>
                &lt;footer&gt;&lt;/footer&gt;
              </code>
            </pre>
          </figure>
          <a href="https://www.youtube.com/watch?v=UB1O30fR-EE">
            HTML Crash Course for absolute beginners – Traversy Media
          </a>
          <br></br>
          <a href="https://www.youtube.com/watch?v=Wm6CUkswsNw">
            Build An HTML5 Website with a Responsive Layout – Traversy Media
          </a>
          <br></br>
          <a href="https://www.youtube.com/watch?v=DPnqb74Smug&t=30s">
            Learn HTML5 – full course with code samples - Freecodecamp
          </a>
          <br></br>
          <a href="https://www.youtube.com/watch?v=pQN-pnXPaVg">
            HTML Full Course – Build a Website Tutorial – Freecodecamp
          </a>
        </div>
        <div id="section-css" className={ ` ${MyThemeStyle.textColor} section-css section` } >
          <h2>CSS3</h2>
          <p>
            Does not deprecate older CSS code it is only an addition to the
            features offered by CSS1. New Features:
          </p>
          <ul>
            <li>
              Box Shadow – A property that enables you to add a shadow to an
              element.
            </li>
            <li>
              Opacity – Can make an element totally transparent or slightly
              see-through depending on the indicated values.
            </li>
            <li>
              Rounded Corners – By using border-radius property you can make an
              element have rounded corners.
            </li>
            <li>Attribute Selectors</li>
            <li>New Colors</li>
            <li>Supports responsive design by using media queries.</li>
            <li>CSS animations without using Javascript or Flash code.</li>
          </ul>
          <p>
            <a href="https://tympanus.net/codrops/css_reference/">
              CSS Reference
            </a>
            <a href="https://www.youtube.com/watch?v=CUxH_rWSI1k">
              CSS Tutorial - Derek Banas
            </a>
          </p>
        </div>
        <div id="section-javascript" className={`section-javascript section ${MyThemeStyle.textColor}`}>
          <h2>Javascript</h2>
          <p>
            Javascript is an event driven language which means that instead of
            waiting for a response it will continue executing code but will also
            continue listening for other events to respond to. It is a
            prototype-based object oriented programming language. It supports
            event-driven, functional and imperative programming styles. It has
            application programming interfaces for working with text, dates,
            regular expressions, standard data structures, and the Document
            Object Model. Javascript does not include any input/output (i/o),
            such as networking, storage, or graphics it relies on a C++ library.
            Callback – Is a function that is to be executed after another
            function has finished executing. Any function that is passed as an
            argument is called a callback function. In javascript, functions are
            considered objects and can take other functions as parameters, and
            can be returned by other functions. Example:
          </p>

          <figure className={MyThemeStyle.textColor}>
            <figcaption>Example</figcaption>
            <pre className="line-numbers">
              <code className={`language-js ${MyThemeStyle.textColor}`}>
                {/* Your code here! */}
                {`let arrOne = [“apple”, “orange”, “pear”, “grape”];
	                  let arrTwo = [];
	
	                  Function getFruit() {
		                  arrOne.map( (fruit) => {
			                  allFruit.push(fruit);
		                  }
	                  }

	                  Function showFruit(){
		                  arrTwo.map( (fruit) => {
			                  console.log("Fruits: " & fruit);
		                  }
	                  }

	                  // Execute functions
	                  getFruit();
	                  showFruit();
	                  // Will show the following:
	                  Fruits: apple
	                  Fruits: orange
	                  Fruits: pear
	                  Fruits: grape
                  `.trim()}
              </code>
            </pre>
          </figure>
          <p>
            But what if we are getting the fruit from a database on another
            server and takes time to retrieve that data? In the following
            example we will use setTimeout() to emulate getting the data from
            another server.
          </p>
          <figure>
            <figcaption>Example</figcaption>
            <pre className="line-numbers">
              <code className={`language-js ${MyThemeStyle.textColor}`}>
                {/* Your code here! */}
                {`
                let arrOne = [“apple”, “orange”, “pear”, “grape”];
                let arrTwo = [];
                  
                  Function getFruit() {
                    setTimeout( () => {
                      arrOne.map( (fruit) => {
                      allFruit.push(fruit);
                    }, 1000);
                  }
                
                  Function showFruit(){
                    arrTwo.map( (fruit) => {
                      console.log("Fruits: " & fruit);
                    }
                  }
                
                  // Execute functions
                  getFruit();
                  showFruit();
                
                  `.trim()}
              </code>
            </pre>
          </figure>
          <p>
            When the above code is executed it will show nothing because
            javascript will not wait for the response back from setTimeout()
            function it will continue to execute the showFruit() function.
          </p>
          <figure>
            <figcaption>Example of a callback function</figcaption>
            <pre className="line-numbers">
              <code className={`language-js ${MyThemeStyle.textColor}`}>
                {/* Your code here! */}
                {`
                let arrOne = [“apple”, “orange”, “pear”, “grape”];
                let arrTwo = [];
                  //  callback is the function we are passing in – showFruit()
                  Function getFruit( callback ) {
                    setTimeout( () => {
                      arrOne.map( (fruit) => {
                      allFruit.push(fruit + “s”);
                    }, 1000);
                    Callback();
                  }
                
                  Function showFruit(){
                    arrTwo.map( (fruit) => {
                      console.log("Fruits: " & fruit);
                    }
                  }
                
                  // Execute functions
                  getFruit(showFruit);
                  // We can comment out showFruit() since we will be passing it as a //parameter
                  // showFruit();
                
                
                  `.trim()}
              </code>
            </pre>
          </figure>
        </div>
        <div id="section-react" className="section-react section">
          <h2>React</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus deleniti ea itaque, distinctio voluptatum, ullam ipsum
            consectetur animi ratione molestias. Dolore fugiat libero natus
            harum adipisci, iste temporibus repellendus ducimus perferendis
            assumenda hic rerum dolores laudantium, tenetur quibusdam quis id
            eius nam doloremque necessitatibus molestias porro amet iusto?
            Neque, consequuntur? Iure qui ex consectetur quae quos minima labore
            iste voluptatibus. Ipsam quis ex nulla blanditiis dolore doloremque
            magnam odio consectetur enim illo, autem sint adipisci provident
            reiciendis culpa voluptate, mollitia beatae? Earum eligendi
            excepturi rem itaque voluptatem? Temporibus, earum tempore? Vel
            distinctio cum ducimus deleniti, ea corporis et nesciunt saepe odio
            nulla iste ratione recusandae dolor natus quod quis porro soluta
            nam. Laboriosam aperiam cumque dolor error cum aspernatur expedita
            incidunt commodi ullam earum quasi id beatae libero qui voluptate
            quaerat sunt provident quos quisquam, inventore dolore labore rem
            voluptas perferendis? Excepturi dolorem, temporibus esse, nam
            officiis quisquam, aut veritatis amet odio voluptatibus voluptates
            enim iure repudiandae suscipit illo provident est quasi minima
            quidem? Labore illo, natus iusto deleniti magni quod ad atque
            incidunt et suscipit doloribus ipsa consequatur soluta eum vero amet
            impedit quis rem voluptatem. Molestiae, repellat consectetur odit
            exercitationem inventore quae cumque fugit dicta perspiciatis
            molestias nesciunt quaerat a quos nostrum doloremque perferendis
            laudantium ipsam et sed eos totam quia soluta? Libero nemo
            necessitatibus laudantium, reprehenderit magnam quod, exercitationem
            officia temporibus accusantium quae officiis dolore dolorum mollitia
            non labore ex repellendus fugit nesciunt amet ad nam ratione
            adipisci? Eveniet animi unde odit, accusamus dicta mollitia labore a
            tempore commodi eaque necessitatibus nobis eligendi placeat sit.
            Eius voluptatibus repellendus vel possimus! Numquam iure veritatis
            blanditiis, officiis beatae exercitationem quidem reprehenderit
            sequi dolores eius, et distinctio molestias corrupti, labore neque
            aliquam perferendis excepturi nostrum totam ipsam ipsum. Eius enim
            aliquid rerum doloremque vitae non quidem harum quo? Quidem?
          </p>
        </div>
        <div id="section-node" className="section-node section">
          <h2>Node</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus deleniti ea itaque, distinctio voluptatum, ullam ipsum
            consectetur animi ratione molestias. Dolore fugiat libero natus
            harum adipisci, iste temporibus repellendus ducimus perferendis
            assumenda hic rerum dolores laudantium, tenetur quibusdam quis id
            eius nam doloremque necessitatibus molestias porro amet iusto?
            Neque, consequuntur? Iure qui ex consectetur quae quos minima labore
            iste voluptatibus. Ipsam quis ex nulla blanditiis dolore doloremque
            magnam odio consectetur enim illo, autem sint adipisci provident
            reiciendis culpa voluptate, mollitia beatae? Earum eligendi
            excepturi rem itaque voluptatem? Temporibus, earum tempore? Vel
            distinctio cum ducimus deleniti, ea corporis et nesciunt saepe odio
            nulla iste ratione recusandae dolor natus quod quis porro soluta
            nam. Laboriosam aperiam cumque dolor error cum aspernatur expedita
            incidunt commodi ullam earum quasi id beatae libero qui voluptate
            quaerat sunt provident quos quisquam, inventore dolore labore rem
            voluptas perferendis? Excepturi dolorem, temporibus esse, nam
            officiis quisquam, aut veritatis amet odio voluptatibus voluptates
            enim iure repudiandae suscipit illo provident est quasi minima
            quidem? Labore illo, natus iusto deleniti magni quod ad atque
            incidunt et suscipit doloribus ipsa consequatur soluta eum vero amet
            impedit quis rem voluptatem. Molestiae, repellat consectetur odit
            exercitationem inventore quae cumque fugit dicta perspiciatis
            molestias nesciunt quaerat a quos nostrum doloremque perferendis
            laudantium ipsam et sed eos totam quia soluta? Libero nemo
            necessitatibus laudantium, reprehenderit magnam quod, exercitationem
            officia temporibus accusantium quae officiis dolore dolorum mollitia
            non labore ex repellendus fugit nesciunt amet ad nam ratione
            adipisci? Eveniet animi unde odit, accusamus dicta mollitia labore a
            tempore commodi eaque necessitatibus nobis eligendi placeat sit.
            Eius voluptatibus repellendus vel possimus! Numquam iure veritatis
            blanditiis, officiis beatae exercitationem quidem reprehenderit
            sequi dolores eius, et distinctio molestias corrupti, labore neque
            aliquam perferendis excepturi nostrum totam ipsam ipsum. Eius enim
            aliquid rerum doloremque vitae non quidem harum quo? Quidem?
          </p>
        </div>
        <div id="section-express" className="section-express section">
          <h2 id="section-express">Express</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus deleniti ea itaque, distinctio voluptatum, ullam ipsum
            consectetur animi ratione molestias. Dolore fugiat libero natus
            harum adipisci, iste temporibus repellendus ducimus perferendis
            assumenda hic rerum dolores laudantium, tenetur quibusdam quis id
            eius nam doloremque necessitatibus molestias porro amet iusto?
            Neque, consequuntur? Iure qui ex consectetur quae quos minima labore
            iste voluptatibus. Ipsam quis ex nulla blanditiis dolore doloremque
            magnam odio consectetur enim illo, autem sint adipisci provident
            reiciendis culpa voluptate, mollitia beatae? Earum eligendi
            excepturi rem itaque voluptatem? Temporibus, earum tempore? Vel
            distinctio cum ducimus deleniti, ea corporis et nesciunt saepe odio
            nulla iste ratione recusandae dolor natus quod quis porro soluta
            nam. Laboriosam aperiam cumque dolor error cum aspernatur expedita
            incidunt commodi ullam earum quasi id beatae libero qui voluptate
            quaerat sunt provident quos quisquam, inventore dolore labore rem
            voluptas perferendis? Excepturi dolorem, temporibus esse, nam
            officiis quisquam, aut veritatis amet odio voluptatibus voluptates
            enim iure repudiandae suscipit illo provident est quasi minima
            quidem? Labore illo, natus iusto deleniti magni quod ad atque
            incidunt et suscipit doloribus ipsa consequatur soluta eum vero amet
            impedit quis rem voluptatem. Molestiae, repellat consectetur odit
            exercitationem inventore quae cumque fugit dicta perspiciatis
            molestias nesciunt quaerat a quos nostrum doloremque perferendis
            laudantium ipsam et sed eos totam quia soluta? Libero nemo
            necessitatibus laudantium, reprehenderit magnam quod, exercitationem
            officia temporibus accusantium quae officiis dolore dolorum mollitia
            non labore ex repellendus fugit nesciunt amet ad nam ratione
            adipisci? Eveniet animi unde odit, accusamus dicta mollitia labore a
            tempore commodi eaque necessitatibus nobis eligendi placeat sit.
            Eius voluptatibus repellendus vel possimus! Numquam iure veritatis
            blanditiis, officiis beatae exercitationem quidem reprehenderit
            sequi dolores eius, et distinctio molestias corrupti, labore neque
            aliquam perferendis excepturi nostrum totam ipsam ipsum. Eius enim
            aliquid rerum doloremque vitae non quidem harum quo? Quidem?
          </p>
        </div>
        <div id="section-mongodb" className="section-mongodb section">
          <h2>MongoDB</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus deleniti ea itaque, distinctio voluptatum, ullam ipsum
            consectetur animi ratione molestias. Dolore fugiat libero natus
            harum adipisci, iste temporibus repellendus ducimus perferendis
            assumenda hic rerum dolores laudantium, tenetur quibusdam quis id
            eius nam doloremque necessitatibus molestias porro amet iusto?
            Neque, consequuntur? Iure qui ex consectetur quae quos minima labore
            iste voluptatibus. Ipsam quis ex nulla blanditiis dolore doloremque
            magnam odio consectetur enim illo, autem sint adipisci provident
            reiciendis culpa voluptate, mollitia beatae? Earum eligendi
            excepturi rem itaque voluptatem? Temporibus, earum tempore? Vel
            distinctio cum ducimus deleniti, ea corporis et nesciunt saepe odio
            nulla iste ratione recusandae dolor natus quod quis porro soluta
            nam. Laboriosam aperiam cumque dolor error cum aspernatur expedita
            incidunt commodi ullam earum quasi id beatae libero qui voluptate
            quaerat sunt provident quos quisquam, inventore dolore labore rem
            voluptas perferendis? Excepturi dolorem, temporibus esse, nam
            officiis quisquam, aut veritatis amet odio voluptatibus voluptates
            enim iure repudiandae suscipit illo provident est quasi minima
            quidem? Labore illo, natus iusto deleniti magni quod ad atque
            incidunt et suscipit doloribus ipsa consequatur soluta eum vero amet
            impedit quis rem voluptatem. Molestiae, repellat consectetur odit
            exercitationem inventore quae cumque fugit dicta perspiciatis
            molestias nesciunt quaerat a quos nostrum doloremque perferendis
            laudantium ipsam et sed eos totam quia soluta? Libero nemo
            necessitatibus laudantium, reprehenderit magnam quod, exercitationem
            officia temporibus accusantium quae officiis dolore dolorum mollitia
            non labore ex repellendus fugit nesciunt amet ad nam ratione
            adipisci? Eveniet animi unde odit, accusamus dicta mollitia labore a
            tempore commodi eaque necessitatibus nobis eligendi placeat sit.
            Eius voluptatibus repellendus vel possimus! Numquam iure veritatis
            blanditiis, officiis beatae exercitationem quidem reprehenderit
            sequi dolores eius, et distinctio molestias corrupti, labore neque
            aliquam perferendis excepturi nostrum totam ipsam ipsum. Eius enim
            aliquid rerum doloremque vitae non quidem harum quo? Quidem?
          </p>
        </div>
        <div id="section-mysql" className="section-mysql section">
          <h2>MySQL</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus deleniti ea itaque, distinctio voluptatum, ullam ipsum
            consectetur animi ratione molestias. Dolore fugiat libero natus
            harum adipisci, iste temporibus repellendus ducimus perferendis
            assumenda hic rerum dolores laudantium, tenetur quibusdam quis id
            eius nam doloremque necessitatibus molestias porro amet iusto?
            Neque, consequuntur? Iure qui ex consectetur quae quos minima labore
            iste voluptatibus. Ipsam quis ex nulla blanditiis dolore doloremque
            magnam odio consectetur enim illo, autem sint adipisci provident
            reiciendis culpa voluptate, mollitia beatae? Earum eligendi
            excepturi rem itaque voluptatem? Temporibus, earum tempore? Vel
            distinctio cum ducimus deleniti, ea corporis et nesciunt saepe odio
            nulla iste ratione recusandae dolor natus quod quis porro soluta
            nam. Laboriosam aperiam cumque dolor error cum aspernatur expedita
            incidunt commodi ullam earum quasi id beatae libero qui voluptate
            quaerat sunt provident quos quisquam, inventore dolore labore rem
            voluptas perferendis? Excepturi dolorem, temporibus esse, nam
            officiis quisquam, aut veritatis amet odio voluptatibus voluptates
            enim iure repudiandae suscipit illo provident est quasi minima
            quidem? Labore illo, natus iusto deleniti magni quod ad atque
            incidunt et suscipit doloribus ipsa consequatur soluta eum vero amet
            impedit quis rem voluptatem. Molestiae, repellat consectetur odit
            exercitationem inventore quae cumque fugit dicta perspiciatis
            molestias nesciunt quaerat a quos nostrum doloremque perferendis
            laudantium ipsam et sed eos totam quia soluta? Libero nemo
            necessitatibus laudantium, reprehenderit magnam quod, exercitationem
            officia temporibus accusantium quae officiis dolore dolorum mollitia
            non labore ex repellendus fugit nesciunt amet ad nam ratione
            adipisci? Eveniet animi unde odit, accusamus dicta mollitia labore a
            tempore commodi eaque necessitatibus nobis eligendi placeat sit.
            Eius voluptatibus repellendus vel possimus! Numquam iure veritatis
            blanditiis, officiis beatae exercitationem quidem reprehenderit
            sequi dolores eius, et distinctio molestias corrupti, labore neque
            aliquam perferendis excepturi nostrum totam ipsam ipsum. Eius enim
            aliquid rerum doloremque vitae non quidem harum quo? Quidem?
          </p>
        </div>
        <div id="section-github" className="section-github section">
          <h2>Github</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus deleniti ea itaque, distinctio voluptatum, ullam ipsum
            consectetur animi ratione molestias. Dolore fugiat libero natus
            harum adipisci, iste temporibus repellendus ducimus perferendis
            assumenda hic rerum dolores laudantium, tenetur quibusdam quis id
            eius nam doloremque necessitatibus molestias porro amet iusto?
            Neque, consequuntur? Iure qui ex consectetur quae quos minima labore
            iste voluptatibus. Ipsam quis ex nulla blanditiis dolore doloremque
            magnam odio consectetur enim illo, autem sint adipisci provident
            reiciendis culpa voluptate, mollitia beatae? Earum eligendi
            excepturi rem itaque voluptatem? Temporibus, earum tempore? Vel
            distinctio cum ducimus deleniti, ea corporis et nesciunt saepe odio
            nulla iste ratione recusandae dolor natus quod quis porro soluta
            nam. Laboriosam aperiam cumque dolor error cum aspernatur expedita
            incidunt commodi ullam earum quasi id beatae libero qui voluptate
            quaerat sunt provident quos quisquam, inventore dolore labore rem
            voluptas perferendis? Excepturi dolorem, temporibus esse, nam
            officiis quisquam, aut veritatis amet odio voluptatibus voluptates
            enim iure repudiandae suscipit illo provident est quasi minima
            quidem? Labore illo, natus iusto deleniti magni quod ad atque
            incidunt et suscipit doloribus ipsa consequatur soluta eum vero amet
            impedit quis rem voluptatem. Molestiae, repellat consectetur odit
            exercitationem inventore quae cumque fugit dicta perspiciatis
            molestias nesciunt quaerat a quos nostrum doloremque perferendis
            laudantium ipsam et sed eos totam quia soluta? Libero nemo
            necessitatibus laudantium, reprehenderit magnam quod, exercitationem
            officia temporibus accusantium quae officiis dolore dolorum mollitia
            non labore ex repellendus fugit nesciunt amet ad nam ratione
            adipisci? Eveniet animi unde odit, accusamus dicta mollitia labore a
            tempore commodi eaque necessitatibus nobis eligendi placeat sit.
            Eius voluptatibus repellendus vel possimus! Numquam iure veritatis
            blanditiis, officiis beatae exercitationem quidem reprehenderit
            sequi dolores eius, et distinctio molestias corrupti, labore neque
            aliquam perferendis excepturi nostrum totam ipsam ipsum. Eius enim
            aliquid rerum doloremque vitae non quidem harum quo? Quidem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;

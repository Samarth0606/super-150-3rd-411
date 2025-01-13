// let rootEl = document.getElementById('root');

// let h1 = document.createElement('h1');
// h1.innerText = "welcome to code baithak";

// rootEl.append(h1);

// -----------------------------

// let rootEl = document.getElementById('root');

// let h1 = React.createElement('h1' , {id:"sam" , className:"vohra"}, "welcome to code baithak 2");

// let root = ReactDOM.createRoot(rootEl)
// root.render(h1)

// ------------------------------------

// let rootEl = document.getElementById('root');

// let h1 = React.createElement('div' , {id:"sam" , className:"vohra"}, React.createElement('div' , null , React.createElement('h1' , null , "hello from code baithak 4")));

// let root = ReactDOM.createRoot(rootEl)
// root.render(h1)

// ------------------------------------

let rootEl = document.getElementById('root');

let h1 = <div>
            <div>
                <h1>hello bhai welcome to code baithak</h1>
            </div>
        </div>

let root = ReactDOM.createRoot(rootEl)
root.render(h1)


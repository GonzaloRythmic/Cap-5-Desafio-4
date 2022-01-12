export function initTitle (){
    class TitleComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const divTitle = document.createElement("div");
            const divSubTitle = document.createElement("h2");

            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");

            divTitle.className = "title"
            divTitle.innerHTML =`
            <h1 class = "title">Titulo de esta página</h1>`; 

            divSubTitle.className = "subtitle";
            divSubTitle.innerHTML = `
            Esta es sin duda la mejor página`;
            
            style.innerHTML = `
                .title {
                    font-family: "Roboto"; 
                    font-size: 52px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .subtitle{
                    font-family: "Roboto"; 
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    margin-top: 23px;
                    text-align: right;
                }`;

            shadow.appendChild(divTitle);
            shadow.appendChild(divSubTitle);
            shadow.appendChild(style);
            
        }
    }
    customElements.define ("title-component", TitleComponent);
}


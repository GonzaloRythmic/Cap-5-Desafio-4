function initFooter () {
    class FooterComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const footer = document.createElement("footer");
            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");
            footer.className = "footer"
            footer.textContent = "Footer";
    
            style.innerHTML = `
            .footer {
                width: 100%;
                height: 233px;
                background-color: #FFA0EA;
            }`;

            shadow.appendChild(footer);
            shadow.appendChild(style);
            
        }
    }
    customElements.define ("footer-component", FooterComponent);
}

export {initFooter};
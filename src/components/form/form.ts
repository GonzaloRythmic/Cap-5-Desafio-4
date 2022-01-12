function initForm () {
    class FormComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const container = document.createElement("div");
            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");

            container.className = "container-form"
            container.innerHTML = `
            <label class = "label">Nombre</label>
            <input class = "input" type = text class = "input" placeholder = "Ingrese su nombre"/>
            <div class = "button-container">
            <button class = "button-1">Botón</button> 
            </div>        
            <div class = "button-container">
                <button class = "button-2">Volver</button>
            </div>
            ` 
    
            style.innerHTML = `
            .container-form {
                display: flex;
                flex-direction: column;
            }
            .input {
                border: solid black;
                max-width: 312px;
                padding: 17px 13px;
            }
            .button-container{
                display:flex;
                justify-content: center;
                width: 100%;
            }
            .button-1 {
                margin-top: 16px;
                background-color: #9CBBE9;
                max-width: 320px;
                font-family: "Roboto";
                font-size: 22px;
            }
            .button-2 {
                margin-top: 69px;
                max-width: 312px;
                font-family: "Roboto";
                font-size: 22px;
            }
            .label{
                font-family: "Roboto";
                font-size: 18px;
            }
            `;

            shadow.appendChild(style);
            shadow.appendChild(container);
            
        }
    }
    customElements.define ("form-component", FormComponent);
}

export {initForm};
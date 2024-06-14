class Header extends HTMLElement {
    constructor() { 
        super(); 
        }
        
        connectedCallback() {
            this.innerHTML = `
            <style>
                @font-face {
                font-family: Roboto;
                src: url(https://fonts.google.com/share?selection.family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900)
                }
        
                .header {
                    margin: 0;
                    padding: 0;
                    font-family: Roboto;
                    background-color: #0000ff;
                }
        
                .top-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
        
                img {
                    background-color: #ff0000;
                }
        
                .img-ctn {
                    background-color: #ff00ff;
                }
        
                nav {
                    display: flex;
                    background-color: #00ff00;
                }
        
                ul {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    list-style-type: none;
                }
        
                li {
                    align-self: center;
                    margin-left: 20px; 
                    margin-right: 20px;
                    background-color: #ffff00;
                }
            </style>
            <header class="header">
                <div class="top-bar">
                    <h1>HEADER</h1>
                    <div class="img-ctn">
                        <img href="../../assets/images/logo.png" alt="Logo"/>
                        <!--<svg></svg>-->
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>LINK1</li>
                        <li>LINK2</li>
                        <li>LINK3</li>
                        <li>LINK4</li>
                        <li>LINK5</li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
        
customElements.define('header-component', Header);
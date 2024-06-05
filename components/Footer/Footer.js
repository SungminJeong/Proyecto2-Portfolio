import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/github.png", "GitHub")}
${Button("/icons/linkedin.png", "LinkedIn")}
${Button("/icons/telegram.png", "Telegram")}
</div>
`;

/*
in Button component
const Button = (icon, text) => `
<button class="my-btn">
<img src=${icon} alt='${text} icon'/>
<h4>${text}</h4>
</button>
`;
 */
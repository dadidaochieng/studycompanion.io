import { NEXT_PUBLIC_WEBAPP_URL } from "../constants";

export const baseEmailTemplate = (message: string, content: string) => {
  const html = `
    <div style="">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="" alt="Logo" style="width: 100px; height: 100px; object-fit: cover;"/>
        ${message}
        ${content}
    </div>
    `;
  const footer = `
    <div style="text-align: center; margin-top: 20px;">
      <a href="${NEXT_PUBLIC_WEBAPP_URL}" style="color: #000000; text-decoration: none;">${NEXT_PUBLIC_WEBAPP_URL}</a>
    </div>
    `;

  return html + footer;
}

export default baseEmailTemplate;

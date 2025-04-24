import React from "react";
import "./Footer.less";
import { MAIL, TELEGA, TWITTER, VK } from "../../utils/consts";
import telega from "./../assets/img/logo_list/telegram.svg";
import vk from "./../assets/img/logo_list/vk.svg";
import ya from "./../assets/img/logo_list/yandex.svg";
import twitter from "./../assets/img/logo_list/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__list-link" href={VK}>
              <img src={vk} alt="" />
            </a>
          </li>
          <li className="footer__list-item">
            <a className="footer__list-link" href={MAIL}>
              <img src={ya} alt="" />
            </a>
          </li>
          <li className="footer__list-item">
            <a className="footer__list-link" href={TWITTER}>
              <img src={twitter} alt="" />
            </a>
          </li>
          <li className="footer__list-item">
            <a className="footer__list-link" href={TELEGA}>
              <img src={telega} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

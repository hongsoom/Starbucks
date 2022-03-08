import React, { Component } from "react";
import COFFEE from "../Coffee/COFFEE";
import MENU from "../Menu/MenuMain";
import LOGIN from "../Login/Login";
import "./main.scss";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="maininner">
            <div class="main-visual_slogan">
              <img
                src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_slogan.png"
                alt="BRING NEW SPRING"
                class="pc-slogan"
              />
            </div>
            <div class="main-visual_set">
              <div class="set_common set_01">
                <img
                  src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_ChouxCreamLatte.png"
                  alt="슈크림 라떼"
                  class="pc-drink"
                />
              </div>
              <div class="set_common set_02">
                <img
                  src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_PinkMagnolia.png"
                  alt="핑크 매그놀리아 레모네이드"
                  class="pc-drink"
                />
              </div>
              <div class="set_common set_03">
                <img
                  src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_main_GreenYogurt.png"
                  alt="파인 코코 그린 요거트 블렌디드"
                  class="pc-drink"
                />
              </div>
            </div>
          </div>
        </div>
        <COFFEE />
        <MENU />
        <LOGIN />
      </div>
    );
  }
}
export default Main;

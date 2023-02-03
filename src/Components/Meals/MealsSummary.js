import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <div className={classes.summary}>
      <h2>맛있는 음식, 배달 가능!!</h2>
      <p>
        주문 가능한 메뉴중 먹을 음식을 고르세요!! 그리고 집에서 점심이나
        저녁으로 즐기세요!!
      </p>
      <p>
        저희는 질 좋은 재료로 모든 음식을 만듭니다. 지금 이 순간 쉐프의 손 맛을
        경험해보세요!
      </p>
    </div>
  );
};
export default MealsSummary;

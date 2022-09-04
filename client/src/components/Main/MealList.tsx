import MealItem from './MealItem';

interface MealListProp {
  meals: DayMeals;
}
const MealList = ({ meals }: MealListProp) => {
  const { breakfast, lunch, dinner, snack } = meals;

  return (
    <>
      <div className="collapse">
        <input type="checkbox" className="peer " />
        <div className="collapse-title py-0 pr-5">
          <div className="divider">더보기</div>
        </div>
        <div className="collapse-content">
          {breakfast && <MealItem time="아침" mealList={breakfast} />}
          {lunch && <MealItem time="점심" mealList={lunch} />}
          {dinner && <MealItem time="저녁" mealList={dinner} />}
          {snack && <MealItem time="간식" mealList={snack} />}
        </div>
      </div>
    </>
  );
};

export default MealList;

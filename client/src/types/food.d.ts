// FIXME: 올바른 dummydata 형식으로 수정 필요
interface nameCalorieData {
  name: string;
  kiloCalories: number;
}

interface DayMeals {
  breakfast: Food[] | null;
  lunch: Food[] | null;
  dinner: Food[] | null;
  snack: Food[] | null;
}

interface Food {
  _id: string;
  name: string;
  servingSize: number;
  kiloCalories: number;
  water: number; // g
  protein: number; // g
  fat: number; // g
  sodium: number; // mg
  carbohydrate: number; // g
  sugars: number; // g
  saturatedFattyAcid: number; // g
  caffeine: number | null; // mg
}

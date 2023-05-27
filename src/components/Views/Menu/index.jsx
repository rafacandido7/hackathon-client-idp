import { getCategories } from '../../../services/api'

async function FoodMenu() {
  console.log(await getCategories())

  return (
    <div>FoodMenu</div>
  )
}

export default FoodMenu

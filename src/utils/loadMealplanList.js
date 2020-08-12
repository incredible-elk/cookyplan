import { loadFromLocal } from './localStorage'

export default function loadMealplanList() {
  return (
    loadFromLocal('mealplanList') || {
      title: '',
      items: [{ id: 'initial', item: '', done: false }],
    }
  )
}

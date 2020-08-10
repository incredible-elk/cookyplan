import React from 'react'
import RecipeDetail from './RecipeDetail'

export default {
  component: RecipeDetail,
  title: 'RecipeDetail',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const recipeDetailData = {
  id: '1',
  title: 'Kaiserschmarrn',
  details: [
    {
      comment: '',
      prepTime: '',
      cookTime: '',
      totalTime: '',
      Servings: '',
      Inspiration: '',
    },
  ],
  ingredients: [
    '1 EL Rum',
    '2 Eigelb',
    '15 g Zucker',
    '1/2 Päckchen Vanillezucker',
    '190 ml Milch',
    '60 g Mehl',
    '2 Eiweiß',
    '20 g Butter',
    'Puderzucker',
    'Salz',
  ],
  method:
    'Eiweiß zu Eischnee steif schlagen. Zucker, Vanillezucker, Butter und Eigelb verrühren. Alle Zutaten bis auf Eischnee vermengen. Eischnee vorisichtig unterheben. In Pfanne ausbacken. Mit Puderzucker garnieren.',
}

export const Recipe = () => <RecipeDetail {...recipeDetailData} />

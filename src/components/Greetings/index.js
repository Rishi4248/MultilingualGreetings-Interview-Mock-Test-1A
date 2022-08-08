import {Component} from 'react'
import './index.css'
import LanguageItem from '../LanguageItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeLanguageId: languageGreetingsList[0].id}

  onClickChangeLanguage = id => {
    this.setState({activeLanguageId: id})
  }

  renderSelectedLanguage = () => {
    const {activeLanguageId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === activeLanguageId)
    ]
    return <img src={imageUrl} className="img" alt={imageAltText} />
  }

  render() {
    const {activeLanguageId} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="ul-container">
          {languageGreetingsList.map(each => (
            <LanguageItem
              key={each.id}
              isActive={activeLanguageId === each.id}
              onClickChangeLanguage={this.onClickChangeLanguage}
              LanguageItemDetails={each}
            />
          ))}
        </ul>
        {this.renderSelectedLanguage()}
      </div>
    )
  }
}
export default Greetings

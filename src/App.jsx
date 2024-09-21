// import './App.css'

import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom"
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section"

import UseWindowResizeTest from "./components/use-window-resize/test"

import TicTacToe from './components/tic-tact-toe'
import SearchAutoComplete from './components/search-autocomplete-with-api'
import GithubProfileFinder from './components/github-profile-finder'
import ModalTest from './components/custom-modal-popup/modal-test'
import TabsTest from './components/custom-tabs/tab-test'
import LightDarkMode from './components/light-dark-mode'
import ScrollIndicator from './components/scroll-indicator'
import QRCodeGenerator from './components/qr-code-generator'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

import FeatureFlags from "./components/feature-flag"
import FeatureFlagGlobalState from "./components/feature-flag/context"

import UseFetchHookTest from "./components/use-fetch/test"
import UseOnClickOutsideTest from "./components/use-outside-click/test"

function App() {

  return (
    <>
      <h1>react app freecodecamp projects</h1>

      {/* Accordian component */}
      <Accordian />

      {/* Random Color component */}
      <RandomColor />

      {/* Star Rating component */}
      <StarRating noOfStars={10} />

      {/* Image Slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/* Load More Products component */}
      <LoadMoreData />

      {/* Tree view component / menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />

      {/* QR Code Generator */}
      <QRCodeGenerator />

      {/* Light and Dark Theme switch */}
      <LightDarkMode />

      {/* Scroll Indicator component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

      {/* Custom Tabs component */}
      <TabsTest />

      {/* Custom Modal component */}
      <ModalTest />

      {/* Github Profile Finder */}
      <GithubProfileFinder />

      {/* Search Autocomplete */}
      <SearchAutoComplete />

      {/* Tic Tac Toe */}
      <TicTacToe />

      {/* Feature Flag Implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>

      {/* useFetch - Custom Hook */}
      <UseFetchHookTest />

      {/* UseOnClickOutsideTest Hook Test */}
      <UseOnClickOutsideTest />

      {/* UseWindow Resize Hook Test */}
      <UseWindowResizeTest />

      {/* Scroll to top and bottom */}
      <ScrollToTopAndBottom />

      {/* Scroll to a particular section */}
      <ScrollToSection />
      
    </>
  )
}

export default App

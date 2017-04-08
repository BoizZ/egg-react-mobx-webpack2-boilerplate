import * as React from 'react'

interface IAppProps {}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {

  public render(): JSX.Element {
    return (
      <div>
        <p>Hello egg and webpack2 and react</p>
      </div>
    )
  }
}

export default App

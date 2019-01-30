import React from 'react';
export default class History extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <div>historia.....{this.props.match.params.id}</div>;
  }
}

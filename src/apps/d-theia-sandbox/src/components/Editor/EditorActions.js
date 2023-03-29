import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theia from 'd-theia';

import { EditorActionsProps } from './../../sharedPropTypes/handlers';


class EditorActions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bUpdateExportData: false
    }
    this.oFileImport = React.createRef();
    this.oFileExport = React.createRef();
  }

  /**
  * Handler fired when user clicks "IMPORT" button,
  * launches file loader which is hidden as it
  * cannot be styled
  *
  * @method hnClickUpload
  */
  hnClickUpload() {
    this.oFileImport.current.click();
  }

  /**
  * Handler fired when a file is selected for uploading.
  * It splits the filename and checks that the last part is
  * JSON. This approach is used because MS file type is unsupported.
  * So long as JSON file is selected, will attempt
  * to import data.
  *
  * @method hnImport
  */
  hnImport() {
    const aFiles = this.oFileImport.current.files;
    const aFileNameSplit = aFiles.length ? aFiles[0].name.split('.') : [];
    if (aFiles.length && aFileNameSplit[aFileNameSplit.length-1]==='json') {
      const fr = new FileReader();
      fr.onload = (e) => this.props.hnReplaceChart(JSON.parse(e.target.result));
      fr.readAsText(aFiles.item(0));
    } else {
      return false;
    }
  }

  /**
  * Handler fired when user clicks export button,
  * functionality is possible due to hidden DOM element which must
  * be programatically clicked by this handler. The export
  * state change is combined with a timer to re-render the
  * component only when necessary to (ie. bind the correct data to export).
  *
  * @method hnExport
  */
  hnExport() {
    this.setState({
      bUpdateExportData: !this.state.bUpdateExportData
    });
    setTimeout(() => {
      this.oFileExport.current.click();
    }, 1);
  }


  /**
  * We only want to re-render when updating the data bound to export.
  */
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.bUpdateExportData !== this.state.bUpdateExportData;
  }

  render() {
    const { oChart, hnAddRow, hnAddColumn, hnReplaceChart } = this.props;
    return (
      <div className="dt-editor-actions dt-section-body">
        <button onClick={hnAddRow} className="dt-btn-add-row" title="Add a new row to the data">ADD ROW</button>
        <button onClick={hnAddColumn} className="dt-btn-add-column" title="Add a new column to the data">ADD COLUMN</button>
        <button onClick={() => hnReplaceChart(Theia.getDataOps().getEmptyData())}
          title="Reset the chart and remove all data" className="dt-btn-clear">CLEAR</button>
        <button onClick={() => hnReplaceChart(Theia.getDataOps().getRandomData())}
          title="Reset the chart and generate new random data" className="dt-btn-randomise">RANDOMISE</button>
        <br/>
        <button onClick={this.hnExport.bind(this)} className="dt-btn-export" title="Export this chart as JSON">EXPORT</button>
        <input type="file" name="dt-import" className="dt-file-import-input" ref={this.oFileImport}
          accept="application/json" onChange={this.hnImport.bind(this)}/>
        <button title="Import JSON for this chart." onClick={this.hnClickUpload.bind(this)}
          className="dt-import-file-submit">IMPORT</button>
        <a href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(oChart))}`}
          ref={this.oFileExport} download="sandbox-export.json"></a>
      </div>
    );
  }
}

EditorActions.propTypes = {
  oChart: PropTypes.object.isRequired,
  ...EditorActionsProps
};

export default EditorActions;

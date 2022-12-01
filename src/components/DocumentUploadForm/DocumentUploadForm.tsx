import React from 'react';
import ManifestImporter from '../ManifestImporter/ManifestImporter';
import DataChecker from '../DataChecker/DataChecker';
import ToleranceSelector from '../ToleranceSelector/ToleranceSelector';
import RadioSelector from '../RadioSelector/RadioSelector';
import ClientSelector from '../ClientSelector/ClientSelector';

function DocumentUploadForm() {
  return (
    <form>
      <div>
        <button>X</button>
        <h1>Document Upload</h1>
      </div>
      <div>
        <div>
          <ManifestImporter />
          <DataChecker />
          <ToleranceSelector />
        </div>
        <div>
          <RadioSelector />
          <DataChecker />
          <ClientSelector />
        </div>
      </div>
      <div>
        <h3>Validation Message here</h3>
        <div>
          <button>Continue Import</button>
          <button>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default DocumentUploadForm;
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { ControlledVocab } from '@folio/stripes/smart-components';
import { IntlConsumer } from '@folio/stripes/core';

class HoldingsTypeSettings extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.connectedControlledVocab = props.stripes.connect(ControlledVocab);
  }

  render() {
    return (
      <IntlConsumer>
        {intl => (
          <this.connectedControlledVocab
            {...this.props}
            baseUrl="holdings-types"
            records="holdingsTypes"
            label={<FormattedMessage id="ui-inventory.holdingsTypes" />}
            labelSingular={intl.formatMessage({ id: 'ui-inventory.holdingsNoteType' })}
            objectLabel={<FormattedMessage id="ui-inventory.holdingsTypes" />}
            visibleFields={['name', 'source']}
            columnMapping={{
              name: intl.formatMessage({ id: 'ui-inventory.name' }),
              source: intl.formatMessage({ id: 'ui-inventory.source' }),
            }}
            readOnlyFields={['source']}
            itemTemplate={{ source: 'local' }}
            hiddenFields={['description', 'numberOfObjects']}
            nameKey="name"
            id="holdingsTypes"
            sortby="name"
          />
        )}
      </IntlConsumer>
    );
  }
}

export default HoldingsTypeSettings;

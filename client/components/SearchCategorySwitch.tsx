import * as React from 'react';
import * as classNames from 'classnames';
import {ButtonGroup,Button} from 'react-bootstrap';
import {SHOW_PLUGINS,SHOW_THEMES,SHOW_TEMPLATES} from '../constants/CategoryFilters';
import {PLUGIN,THEME,TEMPLATE} from "../constants/PackageTypes";
import {CategoryFilter} from "../models/categoryFilter";

const FILTER_TITLES = {
  [SHOW_PLUGINS]: 'Plugins',
  [SHOW_THEMES]: 'Themes',
  [SHOW_TEMPLATES]: 'Templates'
};

interface SearchCategorySwitchProps {
  filter: CategoryFilter;
  onClick: Function;
}

class SearchCategorySwitch extends React.Component<SearchCategorySwitchProps, void> {
  renderFilterButtons() {
    return [SHOW_PLUGINS, SHOW_THEMES, SHOW_TEMPLATES].map(filter => {
      const title = FILTER_TITLES[filter];
      const { filter: selectedFilter, onClick } = this.props;
      return (
        <Button bsStyle="primary"
                key={filter}
                active={filter === selectedFilter.name}
                onClick={() => onClick(filter)}>
          {title}
        </Button>
      );
    });
  }

  render() {
    return (
      <ButtonGroup>
        {this.renderFilterButtons()}
      </ButtonGroup>
    );
  }
}

export default SearchCategorySwitch;

import {
  interactor,
  clickable,
  text,
  value,
} from '@bigtest/interactor';

@interactor class HeaderDropdown {
  click = clickable('button');
}

@interactor class HeaderDropdownMenu {
  clickCancel = clickable('#cancel-instance-edition');
}

@interactor class InstanceCreatePage {
  title = text('[data-test-header-title]');
  headerDropdown = new HeaderDropdown('[class*=paneHeaderCenterInner---] [class*=dropdown---]');
  headerDropdownMenu = new HeaderDropdownMenu();
  sourceValue = value('input[name="source"]');
}

export default new InstanceCreatePage('[data-test-instance-page-type="create"]');

/**
 * Bernd Wessels (https://github.com/BerndWessels/)
 *
 * Copyright © 2016 Bernd Wessels. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Import dependencies.
 */
import {h, Component} from 'preact';
import classnames from 'classnames/dedupe';

/**
 * Import local dependencies.
 */

/**
 * Import styles.
 */
import '@material/drawer/mdc-drawer.scss';

/**
 * Create the component.
 */
export default class DrawerHeader extends Component {
  render({
           'class': className,
           children,
           ...props
         }, state, context) {
    const classes = classnames('mdc-temporary-drawer__header', className);
    return (
      <header class={classes} {...props}>
        <div class="mdc-temporary-drawer__header-content">{children}</div>
      </header>
    );
  }
}

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
import '@material/card/mdc-card.scss';

/**
 * Create the component.
 */
export default class CardTitle extends Component {
  render({
           'class': className,
           children,
           large,
           ...props
         }, state, context) {
    const classes = classnames('mdc-card__title', className, {'mdc-card__title--large': large});
    return (
      <h1 class={classes} {...props}>{children}</h1>
    );
  }
}

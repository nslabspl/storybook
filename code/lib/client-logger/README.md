# Storybook Logger

Any client-side logging that is done through storybook should be done through this package.

Examples:

```js
import { logger } from '@storybook/client-logger';

logger.info('Info message');
logger.warn('Warning message');
logger.error('Error message');
```

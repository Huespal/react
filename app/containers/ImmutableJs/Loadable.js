/**
 * Asynchronously loads the component for ImmutableJS
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null
});

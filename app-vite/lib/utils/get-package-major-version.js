import appPaths from '../app-paths.js'
import { getPackageJson } from './get-package-json.js'

function getMajorVersion (version) {
  const matches = version.match(/^(\d)\./)
  return parseInt(matches[ 1 ], 10)
}

/**
 * Get major version of a host package.
 */
export function getPackageMajorVersion (pkgName, folder = appPaths.appDir) {
  const pkg = getPackageJson(pkgName, folder)

  if (pkg) {
    return getMajorVersion(pkg.version)
  }
}

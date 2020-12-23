import { withStyles } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styled from 'styled-components'
import { globalTheme } from './globalTheme.styles'
import { device } from './mediaQueries.styles'

// * NOTE Cart table added items
export const StyledTable = styled(Table).attrs({})`
 border-top-width: 0px;
 border-top-style: initial;
 border-collapse: collapse;
 border-color: black;
 border-spacing: 2px;
 vertical-align: bottom;
 background: ${globalTheme.SECOND_COLOR};
 margin: 3rem auto;
 border-radius: 10px;
 float: center;
 box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
`

export const StyledTableBody = styled(TableBody).attrs({})`
 vertical-align: middle;
 border-color: black;
`

export const StyledTableCell = withStyles({
 root: {
  textAlign: 'center',
  padding: '6px',
  fontSize: '1.5rem',
  [`@media ${device.LAPTOP}`]: {
   padding: '16px',
   fontSize: '2.5rem',
  },
 },
})(styled(TableCell).attrs({})`
 vertical-align: middle;
 border-color: black;
 text-align: center;
`)

export const StyledTableHead = styled(TableHead).attrs({})`
 text-align: inherit;
 padding: 0.3rem;
`

export const StyledTableRow = styled(TableRow).attrs({})`
 border-bottom-width: 1px;
 vertical-align: inherit;
 border-color: black;
`

// * NOTE User reviews comments
export const StyledTableUserReviews = styled(Table).attrs({})`
 border-top-width: 0px;
 border-top-style: initial;
 width: 100px;
 border-collapse: collapse;
 border-spacing: 2px;
 vertical-align: bottom;
 background: ${globalTheme.SECOND_COLOR};
 margin: 150px auto;
 border-radius: 10px;
 box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
`

export const StyledTableBodyUserReviews = styled(TableBody).attrs({})`
 vertical-align: middle;
 border-color: black;
`

export const StyledTableCellUserReviews = styled(TableCell).attrs({})`
 vertical-align: middle;
 border-color: black;
`

export const StyledTableHeadUserReviews = styled(TableHead).attrs({})`
 text-align: inherit;
 padding: 1rem;
`

export const StyledTableRowUserReviews = styled(TableRow).attrs({})`
 border-bottom-width: 1px;
 width: 50px;
 vertical-align: inherit;
 border-color: black;
`

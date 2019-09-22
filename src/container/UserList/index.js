import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
	makeStyles,
	withStyles,
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	CircularProgress,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { getApi, getUserDetails } from '../../redux/action';
import '../styless.css';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	progress: {
		margin: theme.spacing(2),
	},
}));

class UserTable extends Component {
	state = {
		expanded: false
	}
	componentDidMount() {
		this.props.getApi();
	}

	handleChange = (panel, url) => {
		this.setState(prevState => ({
			expanded: prevState.expanded !== panel ? panel : false
		}), () => {
			if(this.state.expanded) {
				this.props.getUserDetails(url)
			}
		});
	}

	render() {
		const { getApiResponse, classes, gitApiLoader, getUserListResponse } = this.props;
		const { expanded } = this.state;
		return (
			<div className={classes.root}>
				<Fragment>
					{gitApiLoader && <CircularProgress className={`${classes.progress} loaderStyle`} />}
				</Fragment>
				<Table className={classes.table}>
					{getApiResponse && getApiResponse.map(data => (
						<ExpansionPanel key={data.id} expanded={expanded === data.id} onChange={() => this.handleChange(data.id, data.url)}>
							<ExpansionPanelSummary
								expandIcon={<ExpandMore />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<TableRow>
									<TableCell align="right">{data.id}</TableCell>
									<TableCell align="right">{data.login}</TableCell>
								</TableRow>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Table className={classes.table}>
									<TableHead>
										<TableRow>
											<TableCell>Name</TableCell>
											<TableCell>Location</TableCell>
											<TableCell>Blog URL</TableCell>
											<TableCell>Type</TableCell>
											<TableCell>Created At</TableCell>
											<TableCell>Updated At</TableCell>
											<TableCell>image</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>
												{getUserListResponse && getUserListResponse.name}
											</TableCell>
											<TableCell>
												{getUserListResponse && getUserListResponse.location}
											</TableCell>
											<TableCell>
												<a href={getUserListResponse && getUserListResponse.blog} target="_blank" rel="noopener noreferrer">
												{getUserListResponse && getUserListResponse.blog}
												</a>
											</TableCell>
											<TableCell>
												{getUserListResponse && getUserListResponse.type}
											</TableCell>
											<TableCell>
												{getUserListResponse && getUserListResponse.created_at}
											</TableCell>
											<TableCell>
												{getUserListResponse && getUserListResponse.updated_at}
											</TableCell>
											<TableCell>
												{getUserListResponse && <img className="avatarImage" src={getUserListResponse.avatar_url} alt='avatar' />}
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					))}
				</Table>
			</div>
		)
	}
}
const mapDispatchToProps = {
	getApi,
	getUserDetails,
}
const mapStateToProps = (state) => {
	return {
		getApiResponse: state.reducers.getApiResponse,
		gitApiLoader: state.reducers.gitApiLoader,
		getUserListResponse: state.reducers.getUserListResponse,
	}
}
export default compose(
	withStyles(useStyles),
	connect(mapStateToProps, mapDispatchToProps))(UserTable)

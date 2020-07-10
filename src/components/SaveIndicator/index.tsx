import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded'
import { motion } from 'framer-motion'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    zIndex: 1201,
    width: theme.spacing(7.2),
    height: theme.spacing(7.2),
    padding: 16,
  },
}))

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

type SaveIndicator = {
  saving: boolean
  savingError: boolean
}

const SaveIndicator: React.FC<SaveIndicator> = ({ saving, savingError }) => {
  const classes = useStyles()

  const showLoader = !!saving || !!savingError
  return (
    <Box className={classes.container}>
      <Tooltip title={showLoader ? 'Data is saving' : 'Data is saved'}>
        {showLoader ? (
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <CircularProgress size={24} />
          </motion.div>
        ) : (
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <DoneAllRoundedIcon color="primary" />
          </motion.div>
        )}
      </Tooltip>
    </Box>
  )
}

export default SaveIndicator

import React, { useCallback, useMemo } from 'react';
import Markdown from 'react-native-markdown-display';
import { TouchableHelperDescriptorI } from '../../components/TouchableHelper';
import { ScreenProps } from '../types';
import { ModalContainerBlur } from '../../components/ModalContainerBlur';

type Props = ScreenProps<{
  helperDescriptor: TouchableHelperDescriptorI<{}>
}>

const helperById: {[key in string]: { title: string, descriptionMD: string }} = {
  Exercise: {
    title: 'Esercizio',
    descriptionMD: `**In et ingrediens** an cruorem fuerant: est
 [sine](http://in-terres.io/illis-aequoris) pennis deorum, *est*? Memor retentus
 igitur umbras fertilitatis adventum una est partesque cursu. Iubet et firma
 prosiluit: docto id nisi; per proelia imo, nec ablata signat gravis.`,
  },
  Theory: {
    title: 'Teoria',
    descriptionMD: `**In et ingrediens** an cruorem fuerant: est
 [sine](http://in-terres.io/illis-aequoris) pennis deorum, *est*? Memor retentus
 igitur umbras fertilitatis adventum una est partesque cursu. Iubet et firma
 prosiluit: docto id nisi; per proelia imo, nec ablata signat gravis.`,
  },
  Quiz: {
    title: 'Quiz',
    descriptionMD: `**In et ingrediens** an cruorem fuerant: est
 [sine](http://in-terres.io/illis-aequoris) pennis deorum, *est*? Memor retentus
 igitur umbras fertilitatis adventum una est partesque cursu. Iubet et firma
 prosiluit: docto id nisi; per proelia imo, nec ablata signat gravis.`,
  },
  Settings: {
    title: 'Impostazioni',
    descriptionMD: `**In et ingrediens** an cruorem fuerant: est
 [sine](http://in-terres.io/illis-aequoris) pennis deorum, *est*? Memor retentus
 igitur umbras fertilitatis adventum una est partesque cursu. Iubet et firma
 prosiluit: docto id nisi; per proelia imo, nec ablata signat gravis.`,
  },
  default: {
    title: 'Default',
    descriptionMD: `**In et ingrediens** an cruorem fuerant: est
 [sine](http://in-terres.io/illis-aequoris) pennis deorum, *est*? Memor retentus
 igitur umbras fertilitatis adventum una est partesque cursu. Iubet et firma
 prosiluit: docto id nisi; per proelia imo, nec ablata signat gravis.`,
  },
}


export const InlineHelperScreen = (props: Props) => {
  const helperDescriptor: TouchableHelperDescriptorI<{}> | undefined
    = props.route?.params?.helperDescriptor;

  const helper = useMemo(
    () => helperById[helperDescriptor?.helperId ?? 'default'],
    [helperDescriptor]
  );

  const handleDismiss = useCallback(() => {
    props.navigation?.goBack();
  }, [props.navigation]);

  return (
    <ModalContainerBlur
      title={helper.title}
      onDismiss={handleDismiss}
    >
      <Markdown>
        {helper.descriptionMD}
      </Markdown>
    </ModalContainerBlur>
  );
}
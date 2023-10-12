// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import classNames from 'classnames';
import React from 'react';
import type {ReactNode, CSSProperties} from 'react';
import {FormattedMessage} from 'react-intl';
import type {MessageDescriptor} from 'react-intl';

import {t} from 'utils/i18n';

import {NoResultsVariant, NoResultsLayout} from './types';

interface Props {
    expanded?: boolean;
    iconGraphic?: ReactNode;
    title?: ReactNode;
    subtitle?: ReactNode;
    variant?: NoResultsVariant;
    titleValues?: Record<string, ReactNode>;
    subtitleValues?: Record<string, ReactNode>;
    style?: CSSProperties;
    layout?: NoResultsLayout;
    titleClassName?: string;
    subtitleClassName?: string;
}

const titleMap: {[key in NoResultsVariant]: MessageDescriptor} = {
    [NoResultsVariant.ChannelSearch]: {
        id: t('no_results.channel_search.title'),
    },
    [NoResultsVariant.Mentions]: {
        id: t('no_results.mentions.title'),
    },
    [NoResultsVariant.FlaggedPosts]: {
        id: t('no_results.flagged_posts.title'),
    },
    [NoResultsVariant.PinnedPosts]: {
        id: t('no_results.pinned_posts.title'),
    },
    [NoResultsVariant.ChannelFiles]: {
        id: t('no_results.channel_files.title'),
    },
    [NoResultsVariant.ChannelFilesFiltered]: {
        id: t('no_results.channel_files_filtered.title'),
    },
    [NoResultsVariant.UserGroups]: {
        id: t('no_results.user_groups.title'),
    },
    [NoResultsVariant.UserGroupMembers]: {
        id: t('no_results.user_group_members.title'),
    },
    [NoResultsVariant.UserGroupsArchived]: {
        id: t('no_results.user_groups.archived.title'),
    },
};

const subtitleMap: {[key in NoResultsVariant]: MessageDescriptor} = {
    [NoResultsVariant.ChannelSearch]: {
        id: t('no_results.channel_search.subtitle'),
    },
    [NoResultsVariant.Mentions]: {
        id: t('no_results.mentions.subtitle'),
    },
    [NoResultsVariant.FlaggedPosts]: {
        id: t('no_results.flagged_posts.subtitle'),
    },
    [NoResultsVariant.PinnedPosts]: {
        id: t('no_results.pinned_posts.subtitle'),
    },
    [NoResultsVariant.ChannelFiles]: {
        id: t('no_results.channel_files.subtitle'),
    },
    [NoResultsVariant.ChannelFilesFiltered]: {
        id: t('no_results.channel_files_filtered.subtitle'),
    },
    [NoResultsVariant.UserGroups]: {
        id: t('no_results.user_groups.subtitle'),
    },
    [NoResultsVariant.UserGroupMembers]: {
        id: t('no_results.user_group_members.subtitle'),
    },
    [NoResultsVariant.UserGroupsArchived]: {
        id: t('no_results.user_groups.archived.subtitle'),
    },
};

import './no_results_indicator.scss';

const NoResultsIndicator = ({
    expanded,
    style,
    variant,
    titleValues,
    title = variant ? (
        <FormattedMessage
            {...titleMap[variant]}
            values={titleValues}
        />
    ) : null,
    subtitleValues,
    subtitle = variant ? (
        <FormattedMessage
            {...subtitleMap[variant]}
            values={subtitleValues}
        />
    ) : null,
    layout = NoResultsLayout.Vertical,
    titleClassName,
    subtitleClassName,
}: Props) => {
    let content = (
        <div
            className={classNames('no-results__wrapper', {'horizontal-layout': layout === NoResultsLayout.Horizontal})}
            style={style}
        >
            <div
                className='no-results__text-container'
            >
                {title && (
                    <h3 className={classNames('no-results__title', {'only-title': !subtitle}, titleClassName)}>
                        {title}
                    </h3>
                )}

                {subtitle && (
                    <div className={classNames('no-results__subtitle', subtitleClassName)}>
                        {subtitle}
                    </div>
                )}
            </div>

        </div>
    );

    if (expanded) {
        content = (
            <div className='no-results__holder'>
                {content}
            </div>
        );
    }

    return content;
};

export default NoResultsIndicator;

import React from "react";
import Router from "react-router";
import globals from "globals";

let Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

import Master from "./components/Master.react";
import BadgeMaster from "./components/badges/BadgeMaster.react";
import MyBadges from "./components/badges/MyBadges.react";
import AllBadges from "./components/badges/AllBadges.react";
import UnearnedBadges from "./components/badges/UnearnedBadges.react";
import RequestHistory from "./components/requests/ResourceHistoryMaster.react";
import RequestMaster from "./components/requests/RequestMaster.react";
import DashboardPage from "./components/dashboard/DashboardPage.react";
import ProjectListPage from "./components/projects/ProjectListPage.react";
import ImageListPage from "./components/images/ImageListPage.react";
import ImageDetailsPage from "./components/images/ImageDetailsPage.react";
import ProvidersMaster from "./components/providers/ProvidersMaster.react";
import ProviderListSection from "./components/providers/ProviderListSection.react";
import ProviderDetail from "./components/providers/ProviderDetail.react";
import HelpPage from "./components/help/HelpPage.react";
import ProjectsMaster from "./components/projects/ProjectsMaster.react";
import ProjectDetailsMaster from "./components/projects/detail/ProjectDetailsMaster.react";
import ProjectResourcesPage from "./components/projects/ProjectResourcesPage.react";
import FavoritedImagesPage from "./components/images/FavoritedImagesPage.react";
import MyImagesPage from "./components/images/MyImagesPage.react";
import MyImageRequestsPage from "./components/images/MyImageRequestsPage.react";
import ImageTagsPage from "./components/images/ImageTagsPage.react";
import ImagesMaster from "./components/images/ImagesMaster.react";
import NewInstanceDetail from "./components/common/InstanceDetail.react";
import SettingsPage from "./components/settings/SettingsPage.react";
import AdminMaster from "./components/admin/AdminMaster.react";
import AtmosphereUserMaster from "./components/admin/AtmosphereUserMaster.react";
import ImageMaster from "./components/admin/ImageMaster.react";
import ImageRequest from "./components/admin/ImageRequest.react";
import IdentityMembershipMaster from "./components/admin/IdentityMembershipMaster.react";

const providersRoute = (
<Route name="providers" handler={ProvidersMaster}>
    <DefaultRoute handler={ProviderListSection} />
    <Route name="provider" path=":id" handler={ProviderDetail} />
    <Route name="all-providers" path="/" handler={ProviderListSection} />
</Route>
)

const appRoutes = (
<Route name="root" path="/application" handler={Master}>
    <Route name="dashboard" handler={DashboardPage} />
    <Route name="projects" handler={ProjectsMaster}>
        <Route name="project" path=":projectId" handler={ProjectDetailsMaster}>
            <Route name="project-resources" path="resources" handler={ProjectResourcesPage} />
        </Route>
        <DefaultRoute handler={ProjectListPage} />
    </Route>
    <Route name="images" handler={ImagesMaster}>
        <DefaultRoute name="search" handler={ImageListPage} />
        <Route name="favorites" handler={FavoritedImagesPage} />
        <Route name="authored" handler={MyImagesPage} />
        <Route name="my-image-requests" handler={MyImageRequestsPage} />
        <Route name="tags" handler={ImageTagsPage} />
        <Route name="image-details" path=":imageId" handler={ImageDetailsPage} />
    </Route>
    {globals.USE_ALLOCATION_SOURCES
     ? null
     : providersRoute}
    <Route name="help" handler={HelpPage} />
    <Route name="settings" handler={SettingsPage} />
    <Route name="admin" handler={AdminMaster}>
        <Route name="atmosphere-user-manager" path="users" handler={AtmosphereUserMaster} />
        <Route name="identity-membership-manager" path="identities" handler={IdentityMembershipMaster} />
        <Route name="image-request-manager" path="imaging-requests" handler={ImageMaster}>
            <Route name="image-request-detail" path=":id" handler={ImageRequest} />
        </Route>
        <DefaultRoute handler={AtmosphereUserMaster} />
    </Route>
    <Route name="badges" handler={BadgeMaster}>
        <Route name="my-badges" path="my-badges" handler={MyBadges} />
        <Route name="all-badges" path="all-badges" handler={AllBadges} />
        <Route name="unearned-badges" path="unearned-badges" handler={UnearnedBadges} />
    </Route>
    <Route name="my-requests" handler={RequestMaster}>
        <Route name="my-requests-resources" path="resources" handler={RequestHistory} />
        <Route name="my-requests-images" path="images" handler={MyImageRequestsPage} />
    </Route>
    <Route name="instances">
        <Route name="new-instance-detail" path=":id" handler={NewInstanceDetail} />
    </Route>
    <DefaultRoute handler={DashboardPage} />
</Route>
);

export default appRoutes;

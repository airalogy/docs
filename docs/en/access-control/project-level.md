# Project-Level Access Control

## Project Types

On the **Airalogy** platform, projects fall into two categories: **private projects** and **public projects**.
Private projects are further divided into **lab-level private projects** and **project-level private projects**.
Both are managed exactly like private projects—the difference lies only in the default permissions granted to lab members (see below).

- **Lab-level private project**: All Protocols and Records are visible to **every member** of the lab.
- **Project-level private project**: Protocols and Records are visible **only** to members explicitly added to that project.

## Role-Based Access Control

On the **Airalogy** platform, you can invite users to a project and assign them roles. By configuring these roles you control each member’s permissions within the project.

### Roles in Private Projects

| Permission / Action | Owner | Manager |  Collaborator | Recorder |
| - | :-: | :-: | :-: | :-: |
| **1. Set a user as Manager** | ✅ | ❌ | ❌ | ❌ |
| **2. Assign any role *other than* Manager** | ✅ | ✅ | ❌ | ❌ |
| **3. Create a new Protocol** | ✅ | ✅ | ✅ | ✅ <sup>1</sup> |
| **4. Manage a Protocol they created**<br>(once created, the platform automatically designates the creator as that Protocol’s Owner; unless the Owner is changed, the creator by default: 1 can delete the Protocol; 2 can view all Records under it; 3 can delete any Record under it) | ✅ | ✅ | ✅ | ✅ |
| **5. Manage Protocols created by others**<br>(e.g. delete someone else’s Protocol) | ✅ | ✅ | ❌ | ❌ |
| **6. Preview Protocols created by others** | ✅ | ✅ | ✅ | ✅ |
| **7. Open the data-entry interface for others’ Protocols (including running Assigners)** | ✅ | ✅ | ✅ | ✅ |
| **8. Submit data and save it as a Record in others’ Protocols** | ✅ | ✅ | ✅ | ✅ |
| **9. View all Records they have created**<br>(including those created in others’ Protocols) | ✅ | ✅ | ✅ | ✅ |
| **10. View Records created by others in others’ Protocols** | ✅ | ✅ | ✅ | ❌ <sup>2</sup> |
| **11. Delete their own Records**<br>(whether in their own or others’ Protocols) | ✅ | ✅ | ❌ <sup>3</sup> | ❌ <sup>3</sup> |
| **12. Delete Records created by others** | ✅ | ✅ | ❌ | ❌ |

- <sup>1</sup> In private projects, *Recorders* are allowed to create new Protocols to encourage participation and creativity.
- <sup>2</sup> The role of **Recorder** can be understood through the following analogy: in a private project, a **Protocol** is like a private questionnaire. The creator of the Protocol wants to distribute this questionnaire to all project members for completion, but does not want Recorders to see each other’s responses. Therefore, a Recorder can only view their own submitted content, but cannot see what other members have submitted. This is similar to a questionnaire used for collecting personal information—naturally, the creator would not want respondents to see each other’s answers, as that would result in a leak of personal information.
- <sup>3</sup> For data-integrity reasons, *Collaborators* and *Recorders* cannot delete their own Records; they should contact the project **Owner** or **Manager** if deletion is needed.

**Key differences**

- **Owner vs. Manager:** Only Owners can designate users as Managers.
- **Collaborator vs. Recorder:** Collaborators can view Records created by others in others’ Protocols, whereas Recorders cannot.

#### Lab-Level Private Projects

A lab-level private project is essentially a private project in which every lab member automatically receives an irrevocable **Collaborator** role.
In a project-level private project, lab members receive **no role by default**; they obtain permissions only after the **Owner** or a **Manager** invites them to the project and assigns a role.

### Roles in Public Projects

The main difference in a public project is visibility: all Protocols and Records are publicly viewable.

When a private project is switched to public, existing user roles are retained.

| Permission / Action | Owner | Manager | Collaborator | Recorder <sup>4</sup> | Explorer <sup>4</sup> | Viewer <sup>4</sup> |
| - | :-: | :-: | :-: | :-: | :-: | :-: |
| **1. Set a user as Manager** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **2. Assign any role *other than* Manager** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **3. Create a new Protocol** | ✅ | ✅ | ✅ | ❌ <sup>1</sup> | ❌ | ❌ |
| **4. Manage a Protocol they created** | ✅ | ✅ | ✅ | – <sup>2</sup> | – <sup>2</sup> | – <sup>2</sup> |
| **5. Manage Protocols created by others** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **6. Preview Protocols created by others** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **7. Open the data-entry interface for others’ Protocols (including running Assigners)** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **8. Submit data and save it as a Record in others’ Protocols** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **9. View all Records they have created** | ✅ | ✅ | ✅ | ✅ | – <sup>3</sup> | – <sup>3</sup> |
| **10. View Records created by others in others’ Protocols** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **11. Delete their own Records** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **12. Delete Records created by others** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

- <sup>1</sup> For security, *Recorders* cannot create new Protocols in public projects.
- <sup>2</sup> These roles cannot create Protocols; therefore the question of managing their own Protocols does not apply.
- <sup>3</sup> Since *Explorers* and *Viewers* cannot submit Records, viewing “their own” Records is not applicable.
- <sup>4</sup> For the **Recorder / Explorer / Viewer** roles, each can be further divided into two subtypes based on the dimension of **whether or not they can see other users’ records**:
  - **X**: can see everyone’s records
  - **X (Self-only)**: (i.e., appending `(Self-only)` to the role name) can only see their own records
  - With this refinement, the roles in public projects can be further divided into six subtypes. The role matrix is as follows:

    | Role | Can run Assigner | Can submit records | Can see others’ records | Description |
    | - | - | - | - | - |
    | **Recorder** | ✅ | ✅ | ✅ | Full data contributor. **Representative scenario**: a citizen-science project where the Protocol creator wants users worldwide to continuously submit new records, and also wants all users to immediately see all records submitted by everyone. |
    | **Recorder (Self-only)** | ✅ | ✅ | ❌ | Can only submit & view their own records. **Representative scenario**: for example, a public psychology experiment project where researchers wish to collect as much participant data as possible, but do not want participants to see each other’s records, thereby protecting privacy. |
    | **Explorer** | ✅ | ❌ | ✅ | Can run and experiment, but cannot submit permanent data; can view others’ records. **Representative scenario**: a research group publicly shares an experimental Protocol, encouraging people to try it out and learn from others’ records, but does not want external data submissions to mix into the project. |
    | **Explorer (Self-only)** | ✅ | ❌ | ❌ | Can run and experiment, but can only see their own temporary data. **Representative scenario**: the Protocol already has records, and the creator wants the public to experience the functionality without being able to see existing records. This role is rarely used. |
    | **Viewer** | ❌ | ❌ | ✅ | Pure static reader: can view both the public Protocol and its associated records. **Representative scenario**: a researcher publishes a Protocol and its dataset of records for others to reference, but does not want users to run the Protocol. |
    | **Viewer (Self-only)** | ❌ | ❌ | ❌ | Pure static reader: can only view the public Protocol, but cannot see any records. **Representative scenario**: a researcher wishes to share a Protocol publicly for access, but does not want the associated records to be visible. |

#### Notes

- In any public project, anonymous (public) users assume the **Explorer** role by default. This lets them fully try a Protocol—including data-entry—without actually saving data, thereby preventing accidental submissions.
- If a project aims to crowd-source data, you may set the default public role to **Recorder** or **Recorder (Self-only)**, allowing external users to submit Records that become permanent.
- The **Viewer** role exists for projects that only want the public to see static Protocols and Records without executing any associated Python files (e.g., `model.py`, `assigner.py`).

### Project- vs. Protocol-Level Roles

The smallest permission unit in Airalogy is the **Protocol**. In principle you could grant permissions individually per Protocol, achieving fine-grained control across a project.
However, since most Protocols within a project share similar permission needs, **Project-level** roles offer a convenient way to apply uniform permissions across all of a project’s Protocols. Project-level permissions are automatically inherited by every Protocol in that project. If you subsequently configure permissions on a specific Protocol, the more specific **Protocol-level** settings override the broader Project-level grants (the “most specific wins” rule).
